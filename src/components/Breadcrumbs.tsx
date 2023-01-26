import React from "react"

interface Props {
  path: string[]
  setMode: Function
  set_db_chunk: Function
}

// set_db_chunk(get_rem_list([_id]))

export default function Breadcrumbs({ path, setMode, set_db_chunk }: Props) {
  function onClick(e: any) {
    alert(e.target.textContent)

    // set_db_chunk(get_rem_list(e.target.id));
  }

  function renderBreadcrumbs(path: string[]) {
    return [
      <button
        style={{ display: "inline" }}
        onClick={() => setMode("tree")}
        key="root_key"
      >
        Root
      </button>,

      path.map((x: string) => (
        <React.Fragment key={x}>
          <span>➡</span>
          <button
            style={{ display: "inline" }}
            onClick={onClick}
          >
            {x.slice(0, 9)}
          </button>
        </React.Fragment>
      )),
    ]
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
