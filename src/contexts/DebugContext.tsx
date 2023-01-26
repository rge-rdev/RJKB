import { createContext, useState } from "react"

const DebugContext = createContext({})

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
