import { useEffect, useState } from "react"
import Breadcrumbs from "../components/Breadcrumbs"
import { Counter } from "./Counter"
import { selectDebug, toggle_debug } from "../state/reducers/debugSlice"
import { useAppSelector, useAppDispatch } from "../hooks"

interface NavProps {
  mode: string
  setMode: Function
  target: string
  setTarget: Function
  path: string[]
  setPath: Function
  set_db_chunk: Function
}

// db_chunk
export default function Nav({
  mode,
  setMode,
  target,
  setTarget,
  path,
  setPath,
  set_db_chunk,
}: NavProps) {
  // const [debug, setDebug] = useState("on")
  const [alreadyClicked, setAlreadyClicked] = useState(false)

  const debug = useAppSelector((state) => state?.debug?.debug_mode)
  const dispatch = useAppDispatch()

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
        My Rem DB {debug ? (path.length > 1 ? path.join(" ➡ ") : path) : null}
      </h1>

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
        On
        <input
          type="radio"
          value="off"
          checked={!debug}
          readOnly
        />
        Off
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
              setMode(e.target.value)
            }}
          >
            <legend>Set Render Mode</legend>
            <input
              type="radio"
              value="chunk"
              checked={mode === "chunk"}
              readOnly
            />
            Chunk
            <input
              type="radio"
              value="tree"
              checked={mode === "tree"}
              readOnly
            />
            Tree
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
          {/* {mode === "chunk" ? (
            <>
              <button onClick={() => setMode("tree")}>
                Switch to tree mode
              </button>
              <button onClick={onClickMore}>Load more</button>
            </>
          ) : null} */}
          {mode === "tree" ? (
            <>
              <button onClick={() => setMode("chunk")}>
                Switch to Chunk Mode
              </button>
            </>
          ) : null}
          {mode === "zoom" ? (
            <>
              {" "}
              <button onClick={() => setMode("tree")}>
                Go Back to root level
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
              <pre>Debug Mode set to {debug ? "ON" : "OFF"}</pre>
              <pre>Render Mode set to {mode.toUpperCase()}</pre>
              Redux working? <Counter />
              <pre>
                You are {alreadyClicked ? "already" : "now"} viewing from
                {" " + target} level
              </pre>
              <div>{path.length > 1 ? path.join(" ➡ ") : path}</div>
            </code>
          ) : null}
        </>
      ) : null}
      <Breadcrumbs
        path={path}
        setPath={setPath}
        setMode={setMode}
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
