import { useState } from "react"
import { get_rem_list } from "../utility"

interface Props {
  path: string[]
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
  setMode,
  set_db_chunk,
  target,
  setTarget,
  setAlreadyClicked,
}: Props) {
  const [tooltip, setTooltip] = useState("")

  function onClick(e: any) {
    if (e.target.textContent !== target) {
      const target = e.target.textContent
      setTarget(target)
      setAlreadyClicked(false)
      // console.log(target, typeof target, [target], typeof [target])
      // console.log("get_rem_list([target])=", get_rem_list([target]))
      if (target !== "root") set_db_chunk(get_rem_list([target]))
      target === "root" ? setMode("tree") : setMode("zoom")
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
