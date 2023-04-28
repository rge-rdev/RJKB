/**
 * Copyright(c) Roger Jiang
 */

import { lazy, StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { DebugProvider } from "./contexts/DebugContext"
import { store } from "./state/store"
// import App from "./App";
const App = lazy(() => import("./components/App"))

const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)
root.render(
  <StrictMode>
    <Provider store={store}>
      <DebugProvider>
        <App />
      </DebugProvider>
    </Provider>
  </StrictMode>
) /*?.*/
// root.render(
//   <Suspense fallback={<progress />}>
//     <App />
//   </Suspense>
// );
