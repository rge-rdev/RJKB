/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview5xpASpDMpjaWpSeBt(){
  return (<Tooltip
  id="preview__5xpASpDMpjaWpSeBt"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>useRef()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook"><span>Stateful&#x20;Hook</span></Link><span>&#x20;to&#x20;persist&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useRef/Passive-State"><span>Passive&#x20;State</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><span>Variable</span></Link><span>&#x20;across&#x20;renders&#x20;in&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/FC"><span>FC</span></Link><span>,&#x20;as&#x20;</span><b>&#x20;handle&#x20;</b><Link to="/wiki/React/React-API/ReactDOM-API/Escape-Hatch"><span>Escape&#x20;Hatch</span></Link><span>&#x20;to&#x20;</span><Link to="/wiki/JS/JS-Definition/JavaScript-Runtime/Platform-API/Web-API/DOM-API"><span>DOM&#x20;API&#x20;</span></Link><span>&#x20;elements</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 13 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useRef"><code>useRef()</code></Link><span>&#x20;for&#x20;reference&#x20;to&#x20;DOM&#x20;element</span><CodeBlock language="tsx">{`function Component() {\n  const ref = useRef();\n  useEffect(() => ref.current.focus(), []);\n  return <input ref={ref} />;\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>useRef()</code></span><span>&#x20;for&#x20;dblclick&#x20;Counter</span><CodeBlock language="tsx">{`function DblCounter() {\n  const [count, setCount] = useState(0);\n  const lastClick = useRef(null);\n  function onClick() {\n    const isDblClick = Date.now() - lastClick.current < 300\n    if (isDblClick) setCount(count=>count+1);\n    if (!isDblClick) lastClick.current = Date.now();\n  }\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={onClick}>Click</button>\n    </div>\n  )\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useRef"><code>useRef()</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useRef"><code>useRef()</code></Link><span>&#x20;to&#x20;declare&#x20;a&#x20;new&#x20;</span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>useRef()</code></span><span>&#x20;is&#x20;used&#x20;to&#x20;update&#x20;</span><span ><span>state</span></span><span>&#x20;w/o&#x20;</span><span ><span>Trigger</span></span><span>&#x20;re-renders</span></cite></li></ol>
    <Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useRef#references"><button className="react-tooltip__ref-link">
          View 8 more
        </button></Link>
    </small></Tooltip>)
}