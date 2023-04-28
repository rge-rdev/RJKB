/**
 * Copyright(c) Roger Jiang
 */

import React, {
  useState,
  // useLayoutEffect,
  useEffect,
  memo,
} from "react"
import { lazy, Suspense } from "react"
import { make_str, getParentPathIDsArray, make_mdx } from "../utility"
import { rem, root_main_topics } from "../data"
import { Rem_obj } from "../rem-json"

import { useSelector } from "../hooks"
import {
  select_debug_render_mode,
  select_debug_mdx_mode,
  select_debug_mode,
} from "../state/reducers/debugSlice"
import { select_doc_target, set_target } from "../state/reducers/docSlice"

// import Cloze from "./components/Cloze";

import Nav from "./Nav"
import { useDbChunk } from "../hooks"
const Rem = lazy(() => import("./Rem"))

/**
 * TODO: refactor getKeyText
 * TODO: refactor getValueText
 * !Changed render_chunk into FC Render_Docs_BFS to reflect it as recursive fn to render FC
 *
 * @param db_chunk
 * @param set_db_chunk
 * @param parent
 * @param path
 * @param mode
 * @param set_render_mode
 * @param setPath
 * @returns
 */

interface Render_BFS_Props {
  db_chunk: Rem_obj[]
  set_db_chunk?: Function
  parent?: string
  path?: string[]
  setPath?: Function
  mode?: string
  mdx?: boolean
  debug?: boolean
}

/**
 * ✅ Fixed Render_Docs_BFS into proper FC by convert params to props
 * TODO: Refactor db_chunk & set_db_chunk into RTK to stop drilling
 * @interface Render_BFS_Props
 *
 * @param param0
 * @returns
 */

export function Render_Docs_BFS({
  db_chunk,
  set_db_chunk,
  parent,
  path,
  setPath,
  mode,
  mdx,
  debug,
}: Render_BFS_Props) {
  if (typeof db_chunk === "undefined") return [null]
  if (!db_chunk) return [null]
  return db_chunk.map((doc, i) => {
    let text_key: string = ""
    let text_val: string = ""
    if (!doc["key"].length) return null // skip empty rem
    if (doc["key"].length > 0)
      text_key += mdx ? make_mdx(doc["key"]) : make_str(doc["key"])
    if (doc["value"])
      text_val += mdx ? make_mdx(doc["value"]) : make_str(doc["value"])
    if (doc["parent"]) parent = doc["parent"]

    let card_arrow = ""
    if (doc["type"] === 1) card_arrow = "↔"

    if (doc["type"] === 2 && !doc["forget"]) {
      if (doc["enableBackSR"] === true) card_arrow = "⬅"
      if (doc["enableBackSR"] === false || null) card_arrow = "➡"
    }
    if (doc["forget"]) card_arrow = "➖"

    const _id = doc["_id"]
    const childDocList = doc?.["children"]
    let n: undefined | number = doc["n"] ? doc["n"] : undefined // n=1 for root level doc nodes
    path = getParentPathIDsArray(_id) || []
    if (!setPath) throw new Error("no setPath fn pass into render_chunk!")

    return (
      <Suspense
        key={_id}
        fallback={
          <div>
            <sub>
              {/* <em>{mode} mode</em> chunk #{i} loading...{" "} */}
              chunk #{i} loading {debug ? `for UID: ${_id}` : ""}
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
          setPath={setPath}
          mode={mode}
          mdx={mdx}
        ></Rem>
      </Suspense>
    )
  })
}

function App() {
  const step_size = 500
  // const [mode, set_render_mode] = useState("tree")
  const mode = useSelector(select_debug_render_mode) //? "chunk" : "tree"
  const mdx = useSelector(select_debug_mdx_mode)
  const debug = useSelector(select_debug_mode)

  /**
   * @function set_db_chunk to set doc_nodes[] to render with @function render_chunk()
   */
  const [load, setLoad, max_size, db_chunk, set_db_chunk] = useDbChunk(mode)

  const [target, setTarget] = useState("root")

  const [path, setPath] = useState(["root"])

  useEffect(() => {
    setLoad((load: number) => load + step_size)
    if (mode === "chunk") {
      if (load + step_size > max_size) {
        set_db_chunk(rem.docs.slice(0, max_size))
        setLoad(max_size)
      } else {
        set_db_chunk(rem.docs.slice(0, load + step_size))
        setLoad((load: number) => load + step_size)
      }
    }
    if (mode === "tree") {
      set_db_chunk(root_main_topics)
      // set_db_chunk(root) // to load EVERYTHING including tags, links & orphans
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max_size, mode, path, target])

  const onClickMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (load + step_size > max_size) {
      set_db_chunk(rem.docs.slice(0, max_size))
      setLoad(max_size)
    } else {
      set_db_chunk(rem.docs.slice(0, load + step_size))
      setLoad((load: number) => load + step_size)
    }
  }

  return (
    <Suspense fallback={<progress />}>
      <Nav
        target={target}
        setTarget={setTarget}
        path={path}
        setPath={setPath}
        set_db_chunk={set_db_chunk}
      />

      <div>
        {/* {load ? (
          <Render_Docs_BFS
            db_chunk={db_chunk}
            set_db_chunk={set_db_chunk}
            setPath={setPath}
            mode={mode}
            mdx={mdx}
            debug={debug}
          />
        ) : null} */}
        {load
          ? Render_Docs_BFS({
              db_chunk,
              set_db_chunk,
              setPath,
              mode,
              mdx,
              debug,
            })
          : null}
        {load < max_size ? (
          <button onClick={onClickMore}>Load more</button>
        ) : null}
      </div>
    </Suspense>
  )
}

export default memo(App)

/**
 *  rename setMode to set_render_mode from RTK debugSlice reducer
 *
 *  extract const [mode, set_render_mode] = useState("tree") to RTK
 *    mode should be app-wide and not drilled
 */
