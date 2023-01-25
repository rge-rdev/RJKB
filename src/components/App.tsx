import React, { useState, useLayoutEffect, useEffect, memo } from "react"
import { lazy, Suspense } from "react"
import { DebugProvider } from "../contexts/DebugContext"
import { make_str } from "../utility"
import { rem, root } from "../data"
import { Rem_obj } from "../rem-json"
// import Cloze from "./components/Cloze";

import Nav from "./Nav"
const Rem = lazy(() => import("./Rem"))

export function render_chunk(
  db_chunk: Rem_obj[],
  set_db_chunk?: Function,
  parent?: string,
  path?: string[],
  mode?: string,
  setMode?: Function
) {
  if (typeof db_chunk === "undefined") return
  if (!db_chunk) return
  return db_chunk.map((doc, i) => {
    let text_key: string = ""
    let text_val: string = ""
    let card_type = 0
    if (!doc["key"].length) return null // skip empty rem
    if (doc["key"].length > 0) text_key += make_str(doc["key"])
    if (!doc["value"]) card_type = 0
    if (doc["value"]) {
      text_val += make_str(doc["value"])

      if (doc["enableBackSR"] === true) card_type = 1
      if (doc["enableBackSR"] === false) card_type = 2 // 2/3
    }
    if (doc["enableBackSR"] === null) card_type = 0
    if (doc["parent"]) parent = doc["parent"]

    //new card arrow logic
    let card_arrow = ""
    if (doc["type"] === 1) {
      card_arrow = "↔"
    }
    if (doc["type"] === 2) {
      if (doc["enableBackSR"] === true) card_arrow = "⬅"
      if (doc["enableBackSR"] === false) card_arrow = "➡" // 2/3
      if (doc["enableBackSR"] === null) card_arrow = "➖"
    }

    const _id = doc["_id"]
    const childDocList = doc?.["children"]
    // use n to track depth level of note tree
    let n: undefined | number = doc["n"] ? doc["n"] : undefined

    return (
      <Suspense
        key={_id}
        fallback={
          <div>
            <sub>
              <em>{mode} mode</em> chunk #{i} loading...{" "}
            </sub>
          </div>
        }
      >
        <Rem
          i={i}
          text_key={text_key}
          text_val={text_val}
          card_arrow={card_arrow}
          key={_id}
          _id={_id}
          children={childDocList}
          set_db_chunk={set_db_chunk}
          n={n}
          parent={parent}
          path={path}
          mode={mode}
          setMode={setMode}
        ></Rem>
      </Suspense>
    )
  })
}

function App() {
  const max_size = rem.docs.length // 11827-1
  const step_size = 500
  const [mode, setMode] = useState("tree")
  const [load, setLoad] = useState(0)
  const [db_chunk, set_db_chunk] = useState(
    rem.docs.slice(load, load + step_size - 1)
  )

  useLayoutEffect(() => {
    setLoad((load) => load + step_size)
    if (mode === "chunk") {
      if (load + step_size > max_size) {
        set_db_chunk(rem.docs.slice(0, max_size))
        setLoad(max_size)
      } else {
        set_db_chunk(rem.docs.slice(0, load + step_size))
        setLoad((load) => load + step_size)
      }
    }
    if (mode === "tree") set_db_chunk(root)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max_size, mode])

  const onClickMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (load + step_size > max_size) {
      set_db_chunk(rem.docs.slice(0, max_size))
      setLoad(max_size)
    } else {
      set_db_chunk(rem.docs.slice(0, load + step_size))
      setLoad((load) => load + step_size)
    }
  }

  return (
    <Suspense fallback={<progress />}>
      <DebugProvider>
        <Nav
          mode={mode}
          setMode={setMode}
        />
        <div>
          {load
            ? render_chunk(
                db_chunk,
                set_db_chunk,
                undefined,
                undefined,
                mode,
                setMode
              )
            : null}
          {load < max_size ? (
            <button onClick={onClickMore}>Load more</button>
          ) : null}
        </div>
      </DebugProvider>
    </Suspense>
  )
}

export default memo(App) /*?.*/
