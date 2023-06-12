/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewdX4hmdffbrFWPCPg7(){
  return (<Tooltip
  id="preview__dX4hmdffbrFWPCPg7"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>never</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="bottom-type"><span>bottom&#x20;type</span></Link><span>&#x20;to&#x20;rep&#x20;values&#x20;</span><b>never&#x20;observed</b><span>&#x20;(or&#x20;never&#x20;return&#x20;from&#x20;function)</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>functions&#x20;that&#x20;</span><span ><code>throw</code></span><span>&#x20;</span><span ><span>Exception</span></span><span>&#x20;or&#x20;always&#x20;terminate&#x20;execution&#x20;should&#x20;be&#x20;annotated&#x20;with&#x20;</span><span ><code>never</code></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>bottom&#x20;type</span><span>&nbsp;↔&nbsp;</span><span>empty&#x20;</span><Link to="type"><span>Type</span></Link><span>&#x20;</span><Link to="set"><span>set</span></Link><span>&#x20;to&#x20;match&#x20;nothing&#x20;but&#x20;itself;&#x20;</span><Link to="never"><code>never</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="never"><code>never</code></Link></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>never</code></span><span>&#x20;for&#x20;</span><span ><code>Error</code></span><span>&#x20;utility&#x20;function</span><CodeBlock language="tsx">{`function generateError(message: string, errorCode: number): never {\n  throw {message, errorCode}\n}`}</CodeBlock><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>use&#x20;&#x22;:&#x20;</span><Link to="never"><code>never</code></Link><span>&#x22;&#x20;for&#x20;functions&#x20;that</span><span>&nbsp;↔&nbsp;</span><span>should&#x20;never&#x20;complete&#x20;execution</span></cite></li></ol>
    
    </small></Tooltip>)
}