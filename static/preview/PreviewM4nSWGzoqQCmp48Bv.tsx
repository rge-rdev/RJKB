/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewM4nSWGzoqQCmp48Bv(){
  return (<Tooltip
  id="preview__M4nSWGzoqQCmp48Bv"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>useCallback()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="memoizing-hook"><span>Memoizing&#x20;Hook</span></Link><span>&#x20;to&#x20;</span><Link to="memoization"><code>Memoize</code></Link><span>&#x20;</span><Link to="callback-function"><code>Callback</code></Link><span>&#x20;for&#x20;given&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>useCallback()</code></span><span>&#x20;for&#x20;deletable&#x20;todo&#x20;app</span><CodeBlock language="tsx">{`import {memo, useCallback, useState} from "react";\nconst Items = memo(function Items({items, onDelete}) {\n  return (\n    <>\n      <h2>Todo List</h2>\n      <ul>\n        {items.map(todo => {\n          <li key={todo>\n            {todo>}\n            <button onClick={() => onDelete(todo)}>X</button>\n          </li>\n        }\n      </ul>\n    </>\n  )\n})\nfunction Todo() {\n  const [items, setItems] = useState(["item 1", "item 2"])\n  ...\n  const onDelete = useCallback(\n    (item) => setItems(li => li.filter(i => i !== item)),\n    []\n  )\n  ...\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Deps&#x20;Array</span></span><span>&#x20;applies&#x20;to&#x20;</span><span ><code>useEffect()</code></span><span>,&#x20;</span><span ><code>useLayoutEffect()</code></span><span>,&#x20;</span><span ><code>useMemo()</code></span><span>&#x20;&#x26;&#x20;</span><span ><code>useCallback()</code></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>useToggle()</code></span><span>&#x20;apply&#x20;</span><span ><code>useCallback()</code></span><span>&#x20;to&#x20;memoize&#x20;toggle&#x20;</span><span ><span>state</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>useCallback()</code></span><span>&#x20;equiv&#x20;to&#x20;</span><code>useMemo(&#x20;()&#x20;&#x21D2;&#x20;fn,&#x20;deps&#x20;)</code><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>useCallback()</code></span><span>&#x20;to&#x20;memoize&#x20;callback&#x20;which&#x20;change&#x20;on&#x20;deps</span></cite></li></ol>
    
    </small></Tooltip>)
}