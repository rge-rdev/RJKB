import { useState } from "react"
import { useDbChunk } from "../hooks"
import { rem } from "../data"
// import DebugContext from "../contexts/DebugContext";
import Breadcrumbs from "../components/Breadcrumbs"

interface NavProps {
  mode: string
  setMode: Function
}

export default function Nav({ mode, setMode }: NavProps) {
  const [load, setLoad, step, max_size, db_chunk, set_db_chunk] =
    useDbChunk(mode)
  const [radio, setRadio] = useState("tree")
  const [debug, setDebug] = useState("off")

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
              setRadio(e.target.value)
              setMode(e.target.value)
            }}
          >
            <legend>Set Render Mode</legend>
            <input
              type="radio"
              value="chunk"
              checked={radio === "chunk"}
              readOnly
            />
            Chunk
            <input
              type="radio"
              value="tree"
              checked={radio === "tree"}
              readOnly
            />
            Tree
            {mode === "zoom" ? (
              <>
                <input
                  type="radio"
                  value="zoom"
                  checked={radio === "zoom"}
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
              <button onClick={() => setMode("tree")}>Go root</button>
            </>
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
            </code>
          ) : null}
        </>
      ) : null}
      <Breadcrumbs
        path={["abc", "xyz"]}
        setMode={setMode}
        set_db_chunk={set_db_chunk}
      />
    </div>
  )
}
