import { lazy, StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import { DebugProvider } from "./contexts/DebugContext"
// import App from "./App";
const App = lazy(() => import("./components/App"))

const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)
root.render(
  <StrictMode>
    <DebugProvider>
      <App />
    </DebugProvider>
  </StrictMode>
) /*?.*/
// root.render(
//   <Suspense fallback={<progress />}>
//     <App />
//   </Suspense>
// );
