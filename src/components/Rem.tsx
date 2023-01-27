import { memo, useState, useContext } from "react"
import DebugContext from "../contexts/DebugContext"
import { get_rem_list, getParentPathIDsArray } from "../utility/"
import { render_chunk } from "./App"

interface RemType {
  i?: number // TODO counter
  hide?: boolean | undefined
  text_key: string
  text_val: string
  _id: string
  // style?: object; // TODO: pass custom CSS per cell?
  card_arrow: string
  // collapsed?: boolean; // TODO: set cell to minimise children
  children?: string[]
  set_db_chunk?: Function
  n?: number
  path?: string[] // array of IDs
  parent?: string
  debug?: "on" | "off"
  mode?: string
  setMode?: Function
  setTarget?: Function
  setPath: Function
} //((Rem_obj & deleted_rem & portal_rem) | undefined)[];

const InlineBlock = {
  display: "inline-block",
  width: "21.6px",
}

const debug = false

function Rem({
  i,
  hide = false,
  text_key,
  text_val,
  _id,
  card_arrow,
  children,
  set_db_chunk,
  n,
  parent,
  path = [_id],
  mode,
  setMode,
  setTarget,
  setPath,
}: RemType) {
  const [collapse, setCollapse] = useState(false)
  const [draggable, setDraggable] = useState(false)
  const [zoom, setZoom] = useState(false)
  const [dragIcon, setDragIcon] = useState(false)
  const [minIcon, setMinIcon] = useState(false)
  const [bulletIcon, setBulletIcon] = useState(false)
  const rem_doc_list = get_rem_list(children)

  // if (n === 1) {
  //   parent = _id
  //   path = [_id]
  // }
  // if (n && n > 1) {
  //   parent = _id
  //   path.unshift(parent)
  //   if (setPath) setPath(path)
  //   n = path.length
  // }

  function setIcons(flag: boolean) {
    setDragIcon(flag)
    setMinIcon(flag)
    setBulletIcon(flag)
  }
  // console.log(...path) //!SPAM logs to check path is outputing correct = should be no undefined or null!

  return (
    <>
      {!hide ? (
        <div
          id={_id}
          // style={{ border: "1px solid red" }}
        >
          <ul
            style={{
              paddingLeft: `${n === 1 ? 0 : null}px`,
              // border: "1px solid red",
            }}
          >
            {debug && path ? (
              <div>
                <code
                  style={{
                    backgroundColor: "blanchedalmond",
                    display: "block",
                    width: "100%",
                  }}
                >
                  {path?.join("➡")}
                </code>
              </div>
            ) : null}
            <span>
              <span
                className="note-container"
                style={{ display: "inline-block" }}
                onMouseEnter={() => setIcons(true)}
                onMouseLeave={() => setIcons(false)}
              >
                <span
                  className="drag-container"
                  draggable={true}
                  style={InlineBlock}
                  onDragStart={() => {
                    setDraggable(true)
                  }}
                  onDragEnd={() => {
                    setDraggable(draggable)
                  }}
                >
                  {dragIcon ? "🟦" : null}
                </span>
                <span
                  style={InlineBlock}
                  onClick={() => setCollapse(!collapse)}
                >
                  {minIcon ? (collapse ? "🔽" : "🔼") : null}
                </span>
                <span
                  style={InlineBlock}
                  onClick={() => {
                    setPath(["root", ...path])
                    console.log("path from NODE=", path)
                    if (_id) children = [_id]
                    getParentPathIDsArray(_id)
                    setZoom(!zoom)
                    setMode!("zoom")
                    document.getElementById(_id)?.scrollIntoView(true)
                    // console.dir(path)
                    // console.dir(["root", ...path])

                    if (set_db_chunk)
                      //@ts-ignore
                      set_db_chunk(get_rem_list([_id]))
                  }}
                >
                  {bulletIcon ? "🔵" : "⚫"}
                </span>
                {debug ? <button>{n}</button> : null}

                <article
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    // border: "1px solid black",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${text_key} ${
                      text_val ? `${card_arrow}  ${text_val}` : ""
                    }`,
                  }}
                ></article>
              </span>
            </span>

            {children && !collapse
              ? render_chunk(
                  rem_doc_list,
                  set_db_chunk,
                  parent,
                  path,
                  mode,
                  setMode,
                  setPath
                )
              : null}
          </ul>
        </div>
      ) : (
        <div>
          <small>{`>>hidden<<`}</small>
        </div>
      )}
    </>
  )
}

export default memo(Rem)
