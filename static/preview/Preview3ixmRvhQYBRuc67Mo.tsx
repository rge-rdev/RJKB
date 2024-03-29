/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview3ixmRvhQYBRuc67Mo(){
  return (<Tooltip
  id="preview__3ixmRvhQYBRuc67Mo"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Secret&#x20;Key</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="api-key"><span>API&#x20;Key</span></Link><span>&#x20;to&#x20;connect&#x20;</span><Link to="backend"><span>Backend</span></Link><span>&#x20;to&#x20;</span><Link to="online-api"><span>Online&#x20;API</span></Link><span>,&#x20;access&#x20;to&#x20;sensitive&#x20;internals/accounts&#x20;-&#x20;unsafe&#x20;to&#x20;expose</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Restricted&#x20;Key</span><span>&nbsp;↔&nbsp;</span><span ><span>Secret&#x20;Key</span></span><span>&#x20;with&#x20;access&#x20;limit&#x20;to&#x20;reduce&#x20;risk&#x20;on&#x20;loss</span></cite></li><li><cite className="react-tooltip__ref-list"><code>openai</code><span>&nbsp;↔&nbsp;</span><Link to="openai"><span>OpenAI</span></Link><span>&#x20;API&#x20;for&#x20;</span><Link to="node-js"><span>Node.js</span></Link><span>&#x20;</span><Link to="backend"><span>Backend</span></Link><span>&#x20;(will&#x20;expose&#x20;</span><Link to="secret-key"><span>Secret&#x20;Key</span></Link><span>!)</span></cite></li></ol>
    
    </small></Tooltip>)
}