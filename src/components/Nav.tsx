/**
 * Copyright(c) Roger Jiang
 */

import { useEffect, useState } from "react"
import Breadcrumbs from "../components/Breadcrumbs"
import { Counter } from "./Counter"
import {
  select_debug_mode,
  toggle_debug,
  set_render_mode,
  select_debug_render_mode,
  toggle_mdx,
  select_debug_mdx_mode,
  toggle_log,
  select_debug_log,
  toggle_uid,
  select_debug_uid,
} from "../state/reducers/debugSlice"
import { useSelector, useDispatch } from "../hooks"

interface NavProps {
  target: string
  setTarget: Function
  path: string[]
  setPath: Function
  set_db_chunk: Function
}

// db_chunk
export default function Nav({
  target,
  setTarget,
  path,
  setPath,
  set_db_chunk,
}: NavProps) {
  // const [debug, setDebug] = useState("on")
  const [alreadyClicked, setAlreadyClicked] = useState(false)
  const [tooltip, setTooltip] = useState<null | string>(null)

  const debug = useSelector(select_debug_mode)
  const mode = useSelector(select_debug_render_mode)
  const mdx = useSelector(select_debug_mdx_mode)
  const log = useSelector(select_debug_log)
  const uid = useSelector(select_debug_uid)
  const dispatch = useDispatch()

  useEffect(() => {
    setAlreadyClicked(false)
  }, [path])

  // DISABLED Chunk Loading mode and click more btn
  // const onClickMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   if (load + step > max_size) {
  //     set_db_chunk(rem.docs.slice(0, max_size))
  //     setLoad(max_size)
  //   } else {
  //     set_db_chunk(rem.docs.slice(0, load + step))
  //     setLoad((load: any) => load + step)
  //   }
  // }

  function toggle_btn_props(toggle?: boolean) {
    return {
      style: {
        backgroundColor: `${toggle ? "royalblue" : "revert"}`,
        color: `${toggle ? "white" : "revert"}`,
      },
      onMouseLeave: () => setTimeout(() => setTooltip(null), 3000),
    }
  }

  return (
    <div>
      <h1
        style={{
          display: "inline-block",
          height: "2em",
        }}
      >
        My Rem DB
        {debug && log
          ? path.length > 1
            ? " Path: " + path.join(" ➡ ")
            : " Path at root"
          : null}
      </h1>
      <div id="debugPanel">
        <div
          style={{
            display: "inline-table",
            width: `${debug ? "30%" : "100%"}`,
            backgroundColor: `${debug ? "lightsalmon" : "revert"}`,
            height: `${debug ? "15em" : ""}`,
          }}
        >
          <fieldset
            name="debug toggle"
            onChange={(e: any) => {
              // setDebug(e.target.value)
              dispatch(toggle_debug())
            }}
          >
            <legend>
              <b>Debug Mode</b>
            </legend>
            <input
              type="radio"
              value="on"
              checked={debug}
              readOnly
            />
            {/* <button onClick={() => dispatch(toggle_debug())}>ON</button> */}
            ON
            <input
              type="radio"
              value="off"
              checked={!debug}
              readOnly
            />
            {/* <button onClick={() => dispatch(toggle_debug())}>OFF</button> */}
            OFF
            {debug && (
              <span style={{ marginLeft: "20px" }}>
                <em>Toggle Debug OFF if this looks too ugly for you!</em>
              </span>
            )}
          </fieldset>

          {debug ? (
            <>
              <fieldset
                onChange={(e: any) => {
                  // setMode(e.target.value)
                  dispatch(set_render_mode(e.target.value))
                }}
              >
                <legend>
                  <b>Set Render Mode</b>
                </legend>
                <input
                  type="radio"
                  value="chunk"
                  checked={mode === "chunk"}
                  readOnly
                />
                <span
                  {...toggle_btn_props()}
                  onMouseOver={() =>
                    setTooltip(
                      "WARNING: Prepare for some serious lag with Chunk rendering mode!"
                    )
                  }
                >
                  <button onClick={() => dispatch(set_render_mode("chunk"))}>
                    ⚠ Chunk
                  </button>
                </span>
                <input
                  type="radio"
                  value="tree"
                  checked={mode === "tree"}
                  readOnly
                />
                <button
                  {...toggle_btn_props()}
                  onClick={() => dispatch(set_render_mode("tree"))}
                  onMouseOver={() =>
                    setTooltip("Force reset to root view with tree render mode")
                  }
                >
                  Tree
                </button>
                {mode === "zoom" ? (
                  <>
                    <input
                      type="radio"
                      value="zoom"
                      checked={mode === "zoom"}
                      readOnly
                    />
                    Zoom
                  </>
                ) : null}
              </fieldset>

              <div
                id="debug_btn_container"
                style={{ display: "flex" }}
              >
                <button
                  {...toggle_btn_props(mdx)}
                  onClick={() => dispatch(toggle_mdx())}
                  onMouseOver={() =>
                    setTooltip(
                      "Set doc text render mode to MDX instead of HTML"
                    )
                  }
                >
                  Toggle MDX
                </button>
                <button
                  {...toggle_btn_props(uid)}
                  onClick={() => dispatch(toggle_uid())}
                  onMouseOver={() =>
                    setTooltip(
                      "Toggle UID vs text (as HTML or MDX) to render for breadcrumbs"
                    )
                  }
                >
                  Toggle UID
                </button>
                <button
                  {...toggle_btn_props(log)}
                  onClick={() => dispatch(toggle_log())}
                  onMouseOver={() =>
                    setTooltip(
                      "Toggle extra console.log() to spam string[] for doc text output per node"
                    )
                  }
                >
                  Toggle LOG
                </button>
              </div>
              <div
                id="btn_tooltip"
                style={{
                  position: "sticky",
                  visibility: `${tooltip ? "visible" : "collapse"}`,
                  backgroundColor: "paleturquoise",
                  height: "3.5em",
                  // width: "inherit",
                }}
              >
                {tooltip ? tooltip : ""}
              </div>
            </>
          ) : null}
        </div>

        {debug ? (
          <div
            id="debugConsole"
            style={{
              display: "inline-table",
              width: `${debug ? "70%" : "100%"}`,
              height: "15em",
            }}
          >
            {debug ? (
              <code
                style={{
                  display: "block",
                  backgroundColor: "blanchedalmond",
                  height: "inherit",
                }}
              >
                {mode === "zoom" ? (
                  <>
                    {" "}
                    <button onClick={() => dispatch(set_render_mode("tree"))}>
                      FORCE reset to root view
                    </button>
                  </> // more descriptive button info
                ) : null}
                {/* <pre>{load} Chunks loaded!</pre> */}
                <pre>
                  Debug Mode{mdx ? "& MDX Mode" : ""}
                  {uid ? " & UID Mode" : ""}
                  {log ? " & Extra Logs Mode" : ""} set to{" "}
                  {debug ? "ON" : "OFF"}
                </pre>
                <pre>Render Mode set to {mode.toUpperCase()}</pre>
                Redux working? <Counter />
                <pre>
                  You are {alreadyClicked ? "already" : "now"} viewing from
                  {" " + target} level
                </pre>
                <div>{path.length > 1 ? path.join(" ➡ ") : path}</div>
              </code>
            ) : null}
          </div>
        ) : null}
      </div>

      <Breadcrumbs
        path={path}
        setPath={setPath}
        setMode={set_render_mode}
        set_db_chunk={set_db_chunk}
        target={target}
        setTarget={setTarget}
        setAlreadyClicked={setAlreadyClicked}
      />
    </div>
  )
}

/**
 * Del [radio, setRadio] - redundant; works same as [mode, setMode]
 * add [alreadyClicked, setAlreadyClicked] to flag if already at target (for console log)
 */
