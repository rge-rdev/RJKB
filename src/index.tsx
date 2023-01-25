import { lazy, Suspense } from "react";
import * as ReactDOM from "react-dom/client";
// import App from "./App";
const App = lazy(() => import("./components/App"));

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />); /*?.*/
// root.render(
//   <Suspense fallback={<progress />}>
//     <App />
//   </Suspense>
// );
