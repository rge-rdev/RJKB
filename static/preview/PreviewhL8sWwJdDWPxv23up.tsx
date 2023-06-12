/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewhL8sWwJdDWPxv23up(){
  return (<Tooltip
  id="preview__hL8sWwJdDWPxv23up"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Tor&#x20;Circuit</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>series&#x20;of&#x20;</span><b>random</b><span>&#x20;</span><Link to="tor-relay"><code>Relays </code></Link><span>&#x20;to&#x20;</span><Link to="hop"><span>Hop</span></Link><span>&#x20;through&#x20;</span><Link to="tor-network"><span>Tor&#x20;Network</span></Link><span>&#x20;to&#x20;outlet</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Hop</span><span>&nbsp;↔&nbsp;</span><span>to&#x20;move&#x20;traffic&#x20;between&#x20;</span><Link to="tor-relay"><code>Relays </code></Link><span>&#x20;in&#x20;</span><Link to="tor-circuit"><span>Tor&#x20;Circuit</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Tor&#x20;Guard&#x20;Node</span><span>&nbsp;↔&nbsp;</span><span>first&#x20;</span><Link to="tor-relay"><span>Tor&#x20;Relay</span></Link><span>/</span><Link to="bridge"><span>Bridge</span></Link><span>&#x20;when&#x20;connect&#x20;to&#x20;</span><Link to="tor-circuit"><span>Tor&#x20;Circuit</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Bridge</span><span>&nbsp;↔&nbsp;</span><span>secret&#x20;</span><Link to="pt"><span>PT</span></Link><span>&#x20;</span><Link to="tor-relay"><code>Relay</code></Link><span>&#x20;to&#x20;connect&#x20;</span><Link to="tor-circuit"><span>Tor&#x20;Circuit</span></Link><span>.&#x20;</span><Link to="uid"><span>UID</span></Link><span>&#x20;as&#x20;Bridge-emoji&#x20;sequence&#x20;||&#x20;QR&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}