import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewKLTdnaP9Bjy6JS8Wf(){
  return (<Tooltip
  id="preview__KLTdnaP9Bjy6JS8Wf"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Reducer</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;to&#x20;</span><Link to="/wiki/React/React-Stack/redux/Redux-Pattern/Reducer/Reduce"><span>Reduce</span></Link><span>&#x20;to&#x20;new&#x20;state&#x20;value&#x20;from&#x20;</span><Link to="/wiki/React/React-Stack/redux/Redux-Pattern/Action"><span>Action</span></Link><span>&#x20;input&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 9 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><code>useReducer()</code></span><span>&#x20;updates&#x20;</span><span ><span>state</span></span><span>&#x20;&#x26;&#x20;trigger&#x20;re-render&#x20;by&#x20;dispatch&#x20;action&#x20;to&#x20;</span><span ><span>Reducer</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/React/React-Stack/redux/Redux-Pattern/Reducer"><span>Reducer</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/React/React-Stack/redux/Redux-Pattern/Reducer"><span>Reducer</span></Link><span>&#x20;for&#x20;counter</span><CodeBlock language="tsx">{`function reducer (state, action) {\n  if (action === "++") return state + 1\n  if (action === "--") return state - 1\n  if (action === "add") return state + action.payload\n  return state // default\n}`}</CodeBlock><CodeBlock language="tsx">{`let count = 0\ncount = reducer(count, "++")`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;export&#x20;default&#x20;</span><span ><span>Reducer</span></span><span>&#x20;for&#x20;</span><span ><code>useReducer()</code></span><span>&#x20;in&#x20;separate&#x20;reducer.js</span><CodeBlock language="tsx">{`export default function reducer (state, action) {\n  switch (action.type) {\n    case "MY_ACTION_1":\n      return {...state, _someValue: action.payload} // overwrite\n    case "MY_ACTION_2":\n      return {...state, _someBoolean: !state.isTrue} // flip bool\n    default:\n      return state\n  }\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Initialization&#x20;Function</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;pass&#x20;as&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useReducer/Initialization-Argument"><code>Init Arg</code></Link><span>&#x20;to&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useReducer"><code>useReducer()</code></Link><span>&#x20;to&#x20;generate&#x20;</span><Link to="/wiki/React/React-Stack/redux/Redux-Pattern/Initial-State"><span>Initial&#x20;State</span></Link><span>&#x20;for&#x20;</span><Link to="/wiki/React/React-Stack/redux/Redux-Pattern/Reducer"><span>Reducer</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/React/React-Stack/redux/Redux-Pattern/Reducer#references"><button className="react-tooltip__ref-link">
          View 4 more
        </button></Link>
    </small></Tooltip>)
}