/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewRT6qcKMnZ6XCe53SK(){
  return (<Tooltip
  id="preview__RT6qcKMnZ6XCe53SK"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>useMemo()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook"><span>Memoizing&#x20;Hook</span></Link><span>&#x20;to&#x20;</span><Link to="/wiki/Computer-Science/Design-Pattern/Memoization"><code>Memoize</code></Link><span>&#x20;entire&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component"><span>Component</span></Link><span>,&#x20;some&#x20;</span><Link to="/wiki/React/React-API/JSX"><span>JSX</span></Link><span>&#x20;or&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/props"><code>props</code></Link><span>,&#x20;based&#x20;on&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;change</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 8 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>Memo()</code><span>&nbsp;↔&nbsp;</span><Link to="/wiki/React"><span>React</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;from&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo"><code>useMemo()</code></Link><span>&#x20;</span><Link to="/wiki/Dev-tool/API"><span>API</span></Link><span>&#x20;for&#x20;</span><Link to="/wiki/Computer-Science/Design-Pattern/Memoization"><span>Memoization</span></Link><span>&#x20;of&#x20;any&#x20;function&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>useMemo()</code></span><span>&#x20;or&#x20;</span><span ><span>JSX</span></span><span>&#x20;insider&#x20;</span><span ><span>Parent&#x20;Component</span></span><span></span><CodeBlock language="tsx">{`import {useMemo, useState} from "react";\nfunction Todo() {\n  const [items, setItems] = useState(["item 1", "item 2"]);\n  const [newItem, setNewItem] = useState("");\n  function onSubmit(e) {\n    setItems(items => items.concat([newItem]));\n    setNewItem("");\n    e.preventDefault();\n  }\n  const renderedItems = useMemo(\n    () => {\n      <>\n        <h2>Todo List</h2>\n        <ul>\n          {items.map(todo => <li key={todo}>{todo></li>\n        </ul>\n      </>\n    },\n    [items]\n  )\n  const onChange = e => setNewItem(e.target.value);\n  return (\n    <main>\n      {renderedItems}\n      <form onSubmit={onSubmit}>\n        <input value={newItem} onChange={onChange} />\n        <button>Add</button>\n      </form>\n    </main>\n  )\n}`}</CodeBlock><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo"><code>useMemo()</code></Link><span>&#x20;with&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;to&#x20;memoize&#x20;items&#x20;into&#x20;allItems</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!flow&#x20;diagram&#x20;for&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo"><code>useMemo()</code></Link></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>useMemo()</code></span><span>&#x20;to&#x20;memoize&#x20;filtering</span><CodeBlock language="tsx">{`import {useMemo, useState} from "react";\nfunction List({list}) {\n  const [showHighlight, setShowHighlight] = useState(false);\n  const filteredList = useMemo(\n    () => list.filter(({isHighlight}) => showHighlight ? isHighlight : true),\n    [list, showHighlight]\n  )\n  return ...\n}`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo#references"><button className="react-tooltip__ref-link">
          View 3 more
        </button></Link>
    </small></Tooltip>)
}