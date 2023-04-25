import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview5z5KqWsE9SFXtEQWW(){
  return (<Tooltip
  id="preview__5z5KqWsE9SFXtEQWW"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>Memo()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/React"><span>React</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;from&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo"><code>useMemo()</code></Link><span>&#x20;</span><Link to="/wiki/Dev-tool/API"><span>API</span></Link><span>&#x20;for&#x20;</span><Link to="/wiki/Computer-Science/Design-Pattern/Memoization"><span>Memoization</span></Link><span>&#x20;of&#x20;any&#x20;function&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo/Memo"><code>Memo()</code></Link><span>&#x20;addition</span><CodeBlock language="tsx">{`import {memo} \nconst add = (a, b) => a + b;\nconst memAdd = memo(add)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo/Memo"><code>Memo()</code></Link><span>&#x20;with&#x20;sub-component&#x20;in&#x20;todo&#x20;app</span><CodeBlock language="tsx">{`import {memo, useState} from "react";\nconst Items = memo(function Items({items}) {\n  return (\n    <>\n      <h2>Todo Items</h2>\n      <ul>\n        {items.map(todo => <li key={todo}>{todo}</li>)}\n      </ul>\n    </>\n)})\nfunction Todo() {\n  const [item, setItems] = useState(["todo1","todo2"]);\n  const [newItem, setNewItem] = useState("");\n  function onSubmit(e) {\n    setItems(items => items.concat([newItem]);\n    setNewItem("");\n    e.preventDefault();\n  }\n  const onChange = (e) => setNewItem(e.target.value);\n  return (\n    <main>\n      <Items items={items} />\n      <form onSubmit={onSubmit}>\n        <input value={newItem} onChange={onChange} />\n        <button>Add</button>\n      </form>\n    </main>\n  )\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo/Memo"><code>Memo()</code></Link><span>&#x20;wrapper&#x20;around&#x20;each&#x20;Item&#x20;sub-component&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo/Memo"><code>Memo()</code></Link><span>&#x20;</span><CodeBlock language="tsx">{`import {memo, useMemo, useState} from "react";\nconst Items = memo(function Items({items}) {\n  return (\n    <>\n      <h2>Todo List</h2>\n      <ul>\n        {items.map(todo => <li key={todo>{todo></li>)}\n      </ul>\n    </>\n)});\nfunction Todo() {\n  const [items, setItems] = useState["item 1", "item 2"];\n  const [newItem, setNewItem] = useState("");\n  function onSubmit(e) {\n    setItems(items => items.concat([newItem]);\n    setNewItem("");\n    e.preventDefault();\n  }\n  const onChange = e => setNewItem(e.target.value);\n  const allItems = useMemo(\n    () => ["Full Todo List", ...items],\n    [items] // memoize items array\n  );\n  return (\n    <main>\n      <Items items={allItems} />\n      <form onSubmit={onSubmit}>\n        <input value={newItem} onChange={onChange} />\n        <button>Add</button>\n      </form>\n    </main>\n  )\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}