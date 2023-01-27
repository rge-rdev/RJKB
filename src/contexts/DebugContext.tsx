import { createContext, useState } from "react"

interface DebugContextProps {
  mode: string
  setMode?: Function
  debug: boolean
  setDebug?: Function
  console?: boolean
  setConsole?: Function
  renderCount: boolean
  setRenderCount?: Function
}

const DebugContext = createContext<DebugContextProps>({
  mode: "tree",
  setMode: undefined,
  debug: true,
  setDebug: undefined,
  console: true,
  setConsole: undefined,
  renderCount: true,
  setRenderCount: undefined,
})

export default DebugContext

interface ProviderProps {
  children?: React.ReactNode
}

export function DebugProvider({ children }: ProviderProps) {
  const [mode, setMode] = useState("tree")
  const [debug, setDebug] = useState(true)
  const [console, setConsole] = useState(true)
  const [renderCount, setRenderCount] = useState(true)

  return (
    <DebugContext.Provider
      value={{
        mode,
        setMode,
        debug,
        setDebug,
        console,
        setConsole,
        renderCount,
        setRenderCount,
      }}
    >
      {children}
    </DebugContext.Provider>
  )
}
