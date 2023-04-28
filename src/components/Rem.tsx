/**
 * Copyright(c) Roger Jiang
 */

import { memo, useState, useEffect } from "react"

import { get_rem_list, getParentPathIDsArray } from "../utility/"
import { Render_Docs_BFS } from "./App"

import { useDispatch } from "../hooks"
import { set_render_mode } from "../state/reducers/debugSlice"

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
  debug?: boolean //"on" | "off"
  setTarget?: Function
  setPath: Function
  mode?: string
  mdx?: boolean
} //((Rem_obj & deleted_rem & portal_rem) | undefined)[];

const InlineBlock = {
  display: "inline-block",
  width: "21.6px",
}

const debug = false
// const debug = true

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
  setTarget,
  setPath,
  mode,
  mdx,
}: RemType) {
  const [collapse, setCollapse] = useState(false)
  const [draggable, setDraggable] = useState(false)
  const [zoom, setZoom] = useState(false)
  const [dragIcon, setDragIcon] = useState(false)
  const [minIcon, setMinIcon] = useState(false)
  const [bulletIcon, setBulletIcon] = useState(false)
  const rem_doc_list = get_rem_list(children)

  const dispatch = useDispatch()

  function setIcons(flag: boolean) {
    setDragIcon(flag)
    setMinIcon(flag)
    setBulletIcon(flag)
  }
  // console.log(...path) //!SPAM logs to check path is outputing correct = should be no undefined or null!

  useEffect(() => {
    if (debug) console.log([_id, text_key, card_arrow, text_val])
  }, [])

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
                  onClick={() => {
                    if (children?.length) setCollapse(!collapse)
                  }}
                >
                  {children?.length //! this is some epic ternary spaghetti!
                    ? minIcon
                      ? collapse
                        ? "🔽"
                        : "🔼"
                      : null
                    : minIcon && "⏩"}
                </span>
                <span
                  style={InlineBlock}
                  onClick={() => {
                    path = path.filter((x) => x !== null && x !== undefined) //! YUCK WTF is causing null to appear - TODO: trace where null is being inserted to remove this extra filter step!
                    setPath([...path])
                    if (_id) children = [_id]
                    getParentPathIDsArray(_id)
                    setZoom(!zoom)
                    dispatch(set_render_mode("zoom"))
                    document.getElementById(_id)?.scrollIntoView({
                      behavior: "smooth",
                      // block: "nearest",
                      // inline: "nearest",
                    })
                    /**
                     * get_rem_list([_id]) to get target doc node
                     * set_db_chunk() to recursively render target node DFS by children
                     */

                    if (set_db_chunk) set_db_chunk(get_rem_list([_id])) // to rerender whole page as subtree from node
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
                {/* <ReactMarkdown
                  remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                >
                  {text_key + card_arrow + text_val}
                </ReactMarkdown> */}
              </span>
            </span>
            {children && !collapse
              ? Render_Docs_BFS({
                  db_chunk: rem_doc_list,
                  set_db_chunk,
                  parent,
                  path,
                  setPath,
                  mode,
                  mdx,
                })
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
