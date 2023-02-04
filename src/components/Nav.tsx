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
  const [chunkTooltip, setChunkTooltip] = useState(false)

  const debug = useSelector(select_debug_mode)
  const mode = useSelector(select_debug_render_mode)
  const mdx = useSelector(select_debug_mdx_mode)
  const log = useSelector(select_debug_log)
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

  return (
    <div>
      <h1>
        My Rem DB
        {debug
          ? path.length > 1
            ? " Path: " + path.join(" ➡ ")
            : " Path at root"
          : null}
      </h1>
      <div>
        <div
          style={{
            display: "inline-block",
            width: `${debug ? "30%" : "100%"}`,
            backgroundColor: `${debug ? "lightsalmon" : "revert"}`,
          }}
        >
          <fieldset
            name="debug toggle"
            onChange={(e: any) => {
              // setDebug(e.target.value)
              dispatch(toggle_debug())
            }}
          >
            <legend>Debug Mode</legend>
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
            <div>
              <fieldset
                onChange={(e: any) => {
                  // setMode(e.target.value)
                  dispatch(set_render_mode(e.target.value))
                }}
              >
                <legend>Set Render Mode</legend>
                <input
                  type="radio"
                  value="chunk"
                  checked={mode === "chunk"}
                  readOnly
                />
                <span
                  onMouseOver={() => setChunkTooltip(!chunkTooltip)}
                  onMouseLeave={() =>
                    setTimeout(() => setChunkTooltip(false), 1000)
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
                <button onClick={() => dispatch(set_render_mode("tree"))}>
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
                style={{
                  visibility: `${chunkTooltip ? "visible" : "collapse"}`,
                }}
              >
                WARNING: Prepare for some serious lag with Chunk rendering mode!
              </div>
              <div style={{ display: "flex" }}>
                <button
                  style={{ backgroundColor: `${mdx ? "royalblue" : "revert"}` }}
                  onClick={() => dispatch(toggle_mdx())}
                >
                  Toggle MDX
                </button>
                <button
                  style={{ backgroundColor: `${log ? "royalblue" : "revert"}` }}
                  onClick={() => dispatch(toggle_log())}
                >
                  Toggle LOG
                </button>
                <button>Toggle B</button>
                <button>Toggle C</button>
              </div>
            </div>
          ) : null}
        </div>

        {debug ? (
          <div
            style={{
              display: "inline-block",
              width: `${debug ? "70%" : "100%"}`,
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
            {debug ? (
              <code
                style={{
                  display: "block",
                  backgroundColor: "blanchedalmond",
                }}
              >
                {/* <pre>{load} Chunks loaded!</pre> */}
                <pre>
                  Debug Mode {mdx ? "& MDX Mode" : ""}
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
