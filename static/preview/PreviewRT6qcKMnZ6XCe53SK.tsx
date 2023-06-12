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
        <blockquote className="react-tooltip__dd"><span><Link to="memoizing-hook"><span>Memoizing&#x20;Hook</span></Link><span>&#x20;to&#x20;</span><Link to="memoization"><code>Memoize</code></Link><span>&#x20;entire&#x20;</span><Link to="component"><span>Component</span></Link><span>,&#x20;some&#x20;</span><Link to="jsx"><span>JSX</span></Link><span>&#x20;or&#x20;</span><Link to="props"><code>props</code></Link><span>,&#x20;based&#x20;on&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;change</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 8 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>Memo()</code><span>&nbsp;↔&nbsp;</span><Link to="react"><span>React</span></Link><span>&#x20;</span><Link to="function"><span>function</span></Link><span>&#x20;from&#x20;</span><Link to="usememo"><code>useMemo()</code></Link><span>&#x20;</span><Link to="api"><span>API</span></Link><span>&#x20;for&#x20;</span><Link to="memoization"><span>Memoization</span></Link><span>&#x20;of&#x20;any&#x20;function&#x20;
!snippet&#x20;for&#x20;addition</span><CodeBlock language="tsx">{`import {memo} \nconst add = (a, b) => a + b;\nconst memAdd = memo(add)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!flow&#x20;diagram&#x20;for&#x20;</span><Link to="usememo"><code>useMemo()</code></Link></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>useMemo()</code></span><span>&#x20;to&#x20;memoize&#x20;filtering</span><CodeBlock language="tsx">{`import {useMemo, useState} from "react";\nfunction List({list}) {\n  const [showHighlight, setShowHighlight] = useState(false);\n  const filteredList = useMemo(\n    () => list.filter(({isHighlight}) => showHighlight ? isHighlight : true),\n    [list, showHighlight]\n  )\n  return ...\n}`}</CodeBlock><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>extension&#x20;of&#x20;</span><span ><code>useMemo()</code></span><span>&#x20;equivalent&#x20;to</span><CodeBlock language="tsx">{`const useCallbackSameAsThis = (fn, deps) => {\n  useMemo(() => fn, deps)\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>skipping&#x20;</span><span ><span>Deps&#x20;Array</span></span><span>&#x20;for&#x20;</span><span ><code>useMemo()</code></span><span>&nbsp;↔&nbsp;</span><span>is&#x20;pointless&#x20;code!&#x20;nothing&#x20;gets&#x20;memoized&#x20;so&#x20;don&#x27;t&#x20;do&#x20;this!</span></cite></li></ol>
    <Link to="usememo#references"><button className="react-tooltip__ref-link">
          View 3 more
        </button></Link>
    </small></Tooltip>)
}