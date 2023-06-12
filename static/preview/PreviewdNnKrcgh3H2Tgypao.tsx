/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewdNnKrcgh3H2Tgypao(){
  return (<Tooltip
  id="preview__dNnKrcgh3H2Tgypao"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Recursion</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Recursive</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Recusively</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Recursive&#x20;Function</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="function"><span>function</span></Link><span>&#x20;to&#x20;call&#x20;itself&#x20;from&#x20;its&#x20;implementation&#x20;body&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Recursion</span></span><span></span><CodeBlock language="tsx">{`function recursive() {\n  recursive();\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Recursive&#x20;Route</span><span>&nbsp;↔&nbsp;</span><span>use&#x20;</span><span ><code>Nested Routes</code></span><span>&#x20;with&#x20;</span><b><code>/*</code></b><span>&#x20;</span><span ><code>path</code></span><span>&#x20;to&#x20;set&#x20;up&#x20;nested&#x20;link&#x20;within&#x20;</span><span ><code>&#x3C;Route&#x3E;</code></span><span>&#x20;&#x26;&#x20;allow&#x20;it&#x20;to&#x20;return&#x20;new&#x20;</span><span ><code>&#x3C;Route&#x3E;</code></span><span>&#x20;for&#x20;</span><span ><span>Recursion</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Fibonacci&#x20;Recursive</span><span>&nbsp;↔&nbsp;</span><span>assume&#x20;sequence&#x20;starts&#x20;with&#x20;1.&#x20;Example&#x20;of&#x20;BAD&#x20;</span><Link to="recursion"><code>Recursive</code></Link><span>&#x20;fn.&#x20;</span><Link to="traverse_graph"><span>Traverse</span></Link><span>&#x20;down&#x20;Fibonacci&#x20;Tree&#x20;until&#x20;reach&#x20;1</span><CodeBlock language="tsx">{`function fibonacci(index: number) { \n  if(index <= 1) return 1\n  return fibonacci(index-1) + fibonacci(index-2)\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Mutual&#x20;Recursion</span><span>&nbsp;↔&nbsp;</span><Link to="design-pattern"><span>Design&#x20;Pattern</span></Link><span>&#x20;for&#x20;two&#x20;functions&#x20;to&#x20;</span><Link to="recursion"><code>Recusively</code></Link><span>&#x20;call&#x20;each&#x20;other</span></cite></li></ol>
    
    </small></Tooltip>)
}