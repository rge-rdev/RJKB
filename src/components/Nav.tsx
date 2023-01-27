import { useState, useContext } from "react"
import { useDbChunk } from "../hooks"
import { rem } from "../data"
import Breadcrumbs from "../components/Breadcrumbs"
import DebugContext from "../contexts/DebugContext"

interface NavProps {
  mode: string
  setMode: Function
  target: string
  setTarget: Function
}

// db_chunk
export default function Nav({ mode, setMode, target, setTarget }: NavProps) {
  const [load, setLoad, step, max_size, set_db_chunk] = useDbChunk(mode)
  const [debug, setDebug] = useState("on")
  const [alreadyClicked, setAlreadyClicked] = useState(false)
  const { path } = useContext(DebugContext)

  const onClickMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (load + step > max_size) {
      set_db_chunk(rem.docs.slice(0, max_size))
      setLoad(max_size)
    } else {
      set_db_chunk(rem.docs.slice(0, load + step))
      setLoad((load: any) => load + step)
    }
  }

  return (
    <div>
      <h1>My Rem DB</h1>

      <fieldset
        name="debug toggle"
        onChange={(e: any) => {
          setDebug(e.target.value)
        }}
      >
        <legend>Debug Mode</legend>
        <input
          type="radio"
          value="on"
          checked={debug === "on"}
          readOnly
        />
        On
        <input
          type="radio"
          value="off"
          checked={debug === "off"}
          readOnly
        />
        Off
      </fieldset>
      {debug === "on" ? (
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
          {mode === "chunk" ? (
            <>
              <button onClick={() => setMode("tree")}>
                Switch to tree mode
              </button>
              <button onClick={onClickMore}>Load more</button>
            </>
          ) : null}
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
              <pre>{load} Chunks loaded!</pre>
              <pre>Debug Mode set to {debug}</pre>
              <pre>Render Mode set to {mode}</pre>
              <pre>
                You are {alreadyClicked ? "already" : "now"} viewing from{" "}
                {target} level
              </pre>
              {<pre>path = {path}</pre>}
            </code>
          ) : null}
        </>
      ) : null}
      <Breadcrumbs
        path={["abc", "xyz"]} //TODO replace path placeholder
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
