/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewGwTenckbvRJAzxEHh(){
  return (<Tooltip
  id="preview__GwTenckbvRJAzxEHh"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Memoization</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Memoize</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(</span><Link to="/wiki/Computer-Science/Design-Pattern"><span>Design&#x20;Pattern</span></Link><span>)&#x20;to&#x20;</span><Link to="/wiki/Computer-Science/Computer-Network/Network-Request/Data-Fetch/Caching"><code>Cache</code></Link><span>/reuse&#x20;previous&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/return"><code>return</code></Link><span>&#x20;value&#x20;from&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/Functional-Programming/Pure-Function"><span>Pure&#x20;Function</span></Link><span>&#x20;for&#x20;specific&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument"><code>args</code></Link><span>,&#x20;to&#x20;optimize&#x20;performance</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 11 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>useMemo&#x20;to&#x20;</span><span ><span>Memoization</span></span><span>&#x20;for&#x20;rerender</span><CodeBlock language="tsx">{`import { useMemo } from "react";\nfunction Image({index, title}) {\n  const id = useMemo(\n    () => Math.random()*100000,\n    [],\n  );\n  return <h1>{id}</h1>\n};`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>not&#x20;simply&#x20;caching&#x20;which&#x20;remembers&#x20;many&#x20;different&#x20;values&#x20;for&#x20;different&#x20;inputs;&#x20;vs&#x20;</span><span ><span>Memoization</span></span><span>&#x20;which&#x20;only&#x20;remembers&#x20;latest&#x20;call&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>Memo()</code><span>&nbsp;↔&nbsp;</span><Link to="/wiki/React"><span>React</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;from&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Memoizing-Hook/useMemo"><code>useMemo()</code></Link><span>&#x20;</span><Link to="/wiki/Dev-tool/API"><span>API</span></Link><span>&#x20;for&#x20;</span><Link to="/wiki/Computer-Science/Design-Pattern/Memoization"><span>Memoization</span></Link><span>&#x20;of&#x20;any&#x20;function&#x20;
!snippet&#x20;for&#x20;addition</span><CodeBlock language="tsx">{`import {memo} \nconst add = (a, b) => a + b;\nconst memAdd = memo(add)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/Computer-Science/Design-Pattern/Memoization"><span>Memoization</span></Link><span>&#x20;of&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component"><span>Component</span></Link></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Memoization</span></span><span>&#x20;of&#x20;</span><span ><span>JSX</span></span><span>&#x20;(part&#x20;of&#x20;</span><span ><span>Component</span></span><span>)&#x20;
</span><span ><code>useMemo()</code></span><span>&#x20;or&#x20;</span><span ><span>JSX</span></span><span>&#x20;insider&#x20;</span><span ><span>Parent&#x20;Component</span></span><span></span><CodeBlock language="tsx">{`import {useMemo, useState} from "react";\nfunction Todo() {\n  const [items, setItems] = useState(["item 1", "item 2"]);\n  const [newItem, setNewItem] = useState("");\n  function onSubmit(e) {\n    setItems(items => items.concat([newItem]));\n    setNewItem("");\n    e.preventDefault();\n  }\n  const renderedItems = useMemo(\n    () => {\n      <>\n        <h2>Todo List</h2>\n        <ul>\n          {items.map(todo => <li key={todo}>{todo></li>\n        </ul>\n      </>\n    },\n    [items]\n  )\n  const onChange = e => setNewItem(e.target.value);\n  return (\n    <main>\n      {renderedItems}\n      <form onSubmit={onSubmit}>\n        <input value={newItem} onChange={onChange} />\n        <button>Add</button>\n      </form>\n    </main>\n  )\n}`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/Computer-Science/Design-Pattern/Memoization#references"><button className="react-tooltip__ref-link">
          View 6 more
        </button></Link>
    </small></Tooltip>)
}