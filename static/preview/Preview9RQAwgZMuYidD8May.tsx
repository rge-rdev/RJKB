/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview9RQAwgZMuYidD8May(){
  return (<Tooltip
  id="preview__9RQAwgZMuYidD8May"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>useState()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook"><span>Stateful&#x20;Hook</span></Link><span>&#x20;to&#x20;persist&#x20;single&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/state"><span>state</span></Link><span>&#x20;value&#x20;in&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/FC"><span>FC</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 11 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useState"><code>useState()</code></Link><span>&#x20;must&#x20;be&#x20;set&#x20;an&#x20;initial&#x20;value</span></cite></li><li><cite className="react-tooltip__ref-list"><span>static&#x20;initial&#x20;values&#x20;for&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useState"><code>useState()</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>dynamic&#x20;value&#x20;for&#x20;initial&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useState"><code>useState()</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useState"><code>useState()</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>todo&#x20;app&#x20;with&#x20;</span><span ><code>useState()</code></span><span>&#x20;&#x26;&#x20;proper&#x20;array&#x20;cloning</span><CodeBlock language="tsx">{`import {useState} from "react";\nfunction Todo({initList}) {\n  const [todos, setTodos] = useState(initList);\n  return (\n    <main>\n      {todos.map((todo, index) => {\n        <p key={todo}>\n          {todo}\n          <button onClick={() => {\n            setTodos([\n              ...todos.slice(0, index), // spread up to deleted el\n              ...todos.slice(index + 1) // spread after deleted el\n            ]);\n          })>X</button>\n        </p>\n      })}\n    </main>\n}\nexport default function App() {\n  const items = ["todo item 1", "todo item 2"];\n  return <Todo initList={items} />\n}`}</CodeBlock></cite></li></ol>
    <Link to="/wiki/React/React-API/Hooks-API/Stateful-Hook/useState#references"><button className="react-tooltip__ref-link">
          View 6 more
        </button></Link>
    </small></Tooltip>)
}