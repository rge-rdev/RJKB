import React from "react"

interface Props {
  path: string[]
  setMode: Function
  set_db_chunk: Function
  target: string
  setTarget: Function
  setAlreadyClicked: Function
}

// set_db_chunk(get_rem_list([_id]))

export default function Breadcrumbs({
  path,
  setMode,
  // set_db_chunk,
  target,
  setTarget,
  setAlreadyClicked,
}: Props) {
  function onClick(e: any) {
    if (e.target.textContent !== target) {
      const target = e.target.textContent
      setTarget(target)
      target === "root" ? setMode("tree") : setMode("zoom")
      setAlreadyClicked(false)
    } else {
      setAlreadyClicked(true)
    }
    // set_db_chunk(get_rem_list(e.target.id));
  }

  function renderBreadcrumbs(path: string[]) {
    return path.map((x: string, index: number) => (
      <React.Fragment key={x}>
        {/* {index === 0 ? (
          <button
            style={{ display: "inline" }}
            onClick={onClick}
          >
            root
          </button>
        ) : null} */}
        <span>➡</span>
        <button
          style={{ display: "inline" }}
          onClick={onClick}
          onMouseOver={() => {}}
        >
          {x?.length >= 10 ? x.slice(0, 9) : x}
        </button>
      </React.Fragment>
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
      {renderBreadcrumbs(path)}
    </div>
  )
}
