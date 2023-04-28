/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview3qJbWwfocRMbgrtAs(){
  return (<Tooltip
  id="preview__3qJbWwfocRMbgrtAs"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>configureStore()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/React/React-Stack/redux/reduxjs-toolkit"><code>RTK API fn</code></Link><span>&#x20;to&#x20;replace&#x20;createStore&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>create&#x20;</span><code>src/state/store.ts</code><span>&#x20;with&#x20;</span><span ><code>configureStore()</code></span><span></span><CodeBlock language="tsx">{`import { configureStore } from "@reduxjs/toolkit"\nimport rootReducer from "./reducers" // /index.ts\n\nconst store = configureStore({\n  reducer: {\n    //reducer_key: reducer\n  }\n})\n\n// // Infer & Export types for RootState & AppDispatch\nexport type RootState = ReturnType<typeof store.getState>\nexport type AppDispatch = typeof store.dispatch`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}