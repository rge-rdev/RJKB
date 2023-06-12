/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewtbs2TQhoMTbRMgC8m(){
  return (<Tooltip
  id="preview__tbs2TQhoMTbRMgC8m"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Parent&#x20;Component</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="composite-component"><span>Composite&#x20;Component</span></Link><span>&#x20;wrap&#x20;other&#x20;</span><Link to="component"><span>Component</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 8 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><code>props</code></span><span>&#x20;should&#x20;be&#x20;mutated&#x20;in&#x20;</span><span ><span>Parent&#x20;Component</span></span><span>&#x20;instead</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>stateless</span></span><span>&#x20;</span><span ><span>Component</span></span><span>&#x20;only&#x20;change/update&#x20;when&#x20;</span><span ><span>Parent&#x20;Component</span></span><span>&#x20;pass&#x20;new&#x20;</span><span ><code>props</code></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>state</span></span><span>&#x20;can&#x20;be&#x20;stored&#x20;in&#x20;either&#x20;</span><span ><span>Component</span></span><span>,&#x20;</span><span ><span>Parent&#x20;Component</span></span><span>&#x20;or&#x20;any&#x20;</span><span ><span>Ascendant</span></span></cite></li><li><cite className="react-tooltip__ref-list"><Link to="parent-component"><span>Parent&#x20;Component</span></Link><span>&#x20;re-renders</span></cite></li><li><cite className="react-tooltip__ref-list"><code>useContext()</code><span>&nbsp;↔&nbsp;</span><Link to="stateful-hook"><span>Stateful&#x20;Hook</span></Link><span>&#x20;to&#x20;subscribe&#x20;to&#x20;</span><Link to="context"><code>Context</code></Link><span>&#x20;persist&#x20;state&#x20;in&#x20;app-wide&#x20;store&#x20;in&#x20;</span><Link to="parent-component"><span>Parent&#x20;Component</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="parent-component#references"><button className="react-tooltip__ref-link">
          View 3 more
        </button></Link>
    </small></Tooltip>)
}