import { useState } from "react"
import { getParentIDsArray } from "../data"
import { get_rem_list } from "../utility"
import { useSelector, useDispatch } from "../hooks"
import {
  select_debug_log,
  select_debug_mode,
  select_debug_uid,
  set_render_mode,
} from "../state/reducers/debugSlice"
import { getKeyFromID } from "../utility"

interface Props {
  path: string[]
  setPath: Function
  setMode: Function
  set_db_chunk: Function
  target: string
  setTarget: Function
  setAlreadyClicked: Function
}

// set_db_chunk(get_rem_list([_id]))
//TODO Rename to something better than "Breadcrumbs"!

export default function Breadcrumbs({
  path,
  setPath,
  setMode,
  set_db_chunk,
  target,
  setTarget,
  setAlreadyClicked,
}: Props) {
  const [tooltip, setTooltip] = useState("")
  //TODO tooltip is cur placeholder for key textContent of Doc
  const debug = useSelector(select_debug_mode)
  const uid = useSelector(select_debug_uid)
  const log = useSelector(select_debug_log)
  const dispatch = useDispatch()

  function onClick(e: any) {
    if (log) console.log(`You clicked on ${e.target.id} on breadcrumbs`)
    // change to match id and NOT rely on textContent
    // to allow toggle render uid || text mode
    if (e.target.id !== target) {
      const target = e.target.id
      setTarget(target)
      setAlreadyClicked(false)
      const path_IDs_array = getParentIDsArray(target).filter(
        (x) => x !== null && x !== undefined
      )
      setPath(path_IDs_array)

      if (target !== "root") {
        const _path = get_rem_list([target])
        set_db_chunk(_path)
        // setPath(_path)
        setMode("zoom")
      }

      if (target === "root") {
        setMode("tree")
        setPath(["root"])
      }
    } else {
      setAlreadyClicked(true)
      if (target === "root") dispatch(set_render_mode("tree")) //setMode("tree")
    }
    // set_db_chunk(get_rem_list(e.target.id));
  }

  /**
   * DFS Recursive FC to render all breadcrumb path to UID
   * toggle debug to
   *
   * @param path string of UIDs to either render as is or transform under uid mode
   * @returns
   */

  function renderBreadcrumbs(path: string[]) {
    return path.map((x: string, index: number) => (
      <span key={x}>
        {index > 0 && <span>➡</span>}

        <button
          id={x}
          style={{ display: "inline" }}
          onClick={onClick}
          onMouseOver={(e) => setTooltip(String(e.currentTarget.textContent))}
          onMouseLeave={(e) => setTooltip("")}
        >
          {/* Slicing UID can PAINFUL bugs with doc search*/}
          {uid && debug ? x : getKeyFromID(x)}
          {/* {x?.length >= 16 ? x.slice(0, 15) : x} */}
        </button>
      </span>
    ))
  }
  return (
    <div
      style={{
        border: "1px solid",
        paddingLeft: "10px",
        margin: "2em 2em",
        width: "inherit",
        // position: "sticky", // NOT WORKING?!
        // top: "0",
        // zIndex: "100",
      }}
    >
      <div style={{ visibility: `${tooltip ? "visible" : "hidden"}` }}>
        {tooltip ? (
          <b>{tooltip}</b>
        ) : (
          "invisible placeholder to stop the annoying flashing!!"
        )}
      </div>
      {debug ? renderBreadcrumbs(path) : renderBreadcrumbs(path)}
    </div>
  )
}

/**
 * TODO: clean mdx || html from key_text for breadcrumb => output as "clean_text_key"
 * TODO: slugify clean_text_key for routing
 */
