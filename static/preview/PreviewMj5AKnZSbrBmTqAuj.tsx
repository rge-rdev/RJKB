import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewMj5AKnZSbrBmTqAuj(){
  return (<Tooltip
  id="preview__Mj5AKnZSbrBmTqAuj"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Pure&#x20;Function</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>Function&#x20;with&#x20;fixed&#x20;input&#x20;&#x26;&#x20;same&#x20;output,&#x20;no&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/Functional-Programming/Side-Effect"><span>Side&#x20;Effect</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>remembering&#x20;last&#x20;I/O&#x20;of&#x20;</span><span ><span>Pure&#x20;Function</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Memoization</span><span>&nbsp;↔&nbsp;</span><span>(</span><Link to="/wiki/Computer-Science/Design-Pattern"><span>Design&#x20;Pattern</span></Link><span>)&#x20;to&#x20;</span><Link to="/wiki/Computer-Science/Computer-Network/Network-Request/Data-Fetch/Caching"><code>Cache</code></Link><span>/reuse&#x20;previous&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/return"><code>return</code></Link><span>&#x20;value&#x20;from&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/Functional-Programming/Pure-Function"><span>Pure&#x20;Function</span></Link><span>&#x20;for&#x20;specific&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument"><code>args</code></Link><span>,&#x20;to&#x20;optimize&#x20;performance</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Hidden&#x20;Dependency</span></span><span>&#x20;can&#x20;be&#x20;moved&#x20;into&#x20;input&#x20;</span><span ><span>Argument</span></span><span>&#x20;to&#x20;turn&#x20;into&#x20;</span><span ><span>Pure&#x20;Function</span></span><span></span><CodeBlock language="tsx">{`function add(a, b, c, log) {\n  log(a, b)\n  return a + b + c;\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}