import { useEffect, useState } from "react"
import { getParentIDsArray } from "../data"
import { get_rem_list } from "../utility"

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

  useEffect(() => {
    path = path.filter((x) => x !== null && x !== undefined) //! YUCK WTF is causing null to appear - TODO: trace where null is being inserted to remove this extra filter step!
    console.log("path from Breadcrumbs is now=", path)
  }, [path])

  function onClick(e: any) {
    if (e.target.textContent !== target) {
      const target = e.target.textContent
      setTarget(target)
      setAlreadyClicked(false)
      const path_IDs_array = getParentIDsArray(target).filter(
        (x) => x !== null && x !== undefined
      )
      console.log("onClick path=", path_IDs_array)
      setPath(path_IDs_array)
      // console.log(target, typeof target, [target], typeof [target])
      // console.log("get_rem_list([target])=", get_rem_list([target]))

      if (target !== "root") {
        const _path = get_rem_list([target])
        set_db_chunk(_path)
        // setPath(_path)
        setMode("zoom")
      }

      if (target === "root") {
        setMode("tree")
        // setPath(["root"])
      }
    } else {
      setAlreadyClicked(true)
    }
    // set_db_chunk(get_rem_list(e.target.id));
  }

  function renderBreadcrumbs(path: string[]) {
    return path.map((x: string, index: number) => (
      <span key={x}>
        {/* {index === 0 ? (
          <button
            style={{ display: "inline" }}
            onClick={onClick}
          >
            root
        ) : null} */}
        {index > 0 && <span>➡</span>}

        <button
          style={{ display: "inline" }}
          onClick={onClick}
          onMouseOver={(e) => setTooltip(String(e.currentTarget.textContent))}
          onMouseLeave={(e) => setTooltip("")}
        >
          {/* Slicing UID can PAINFUL bugs with doc search*/}
          {x}
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
        margin: "10px",
      }}
    >
      <div style={{ visibility: `${tooltip ? "visible" : "hidden"}` }}>
        {tooltip ? (
          <b>{tooltip}</b>
        ) : (
          "invisible placeholder to stop the annoying flashing!!"
        )}
      </div>
      {renderBreadcrumbs(path)}
    </div>
  )
}
