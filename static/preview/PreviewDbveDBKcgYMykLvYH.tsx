/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewDbveDBKcgYMykLvYH(){
  return (<Tooltip
  id="preview__DbveDBKcgYMykLvYH"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Tor&#x20;Relay</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Relay</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Relays&#x20;</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>public&#x20;listed&#x20;node&#x20;to&#x20;forward&#x20;</span><Link to="tor-browser"><code>TOR</code></Link><span>&#x20;traffic</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 9 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Tor&#x20;Exit&#x20;Node</span><span>&nbsp;↔&nbsp;</span><span>Last&#x20;(3rd)&#x20;</span><Link to="tor-relay"><span>Tor&#x20;Relay</span></Link><span>&#x20;to&#x20;output&#x20;web&#x20;traffic</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Tor&#x20;Browser</span><span>&nbsp;↔&nbsp;</span><Link to="firefox"><span>Firefox</span></Link><span>&#x20;mod&#x20;to&#x20;bounce&#x20;traffic&#x20;through&#x20;onion&#x20;</span><Link to="tor-relay"><code>Relays </code></Link><span>&#x20;&#x26;&#x20;prevent&#x20;fingerprint</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Hop</span><span>&nbsp;↔&nbsp;</span><span>to&#x20;move&#x20;traffic&#x20;between&#x20;</span><Link to="tor-relay"><code>Relays </code></Link><span>&#x20;in&#x20;</span><Link to="tor-circuit"><span>Tor&#x20;Circuit</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Tor&#x20;Guard&#x20;Node</span><span>&nbsp;↔&nbsp;</span><span>first&#x20;</span><Link to="tor-relay"><span>Tor&#x20;Relay</span></Link><span>/</span><Link to="bridge"><span>Bridge</span></Link><span>&#x20;when&#x20;connect&#x20;to&#x20;</span><Link to="tor-circuit"><span>Tor&#x20;Circuit</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Bridge&#x20;Authority</span><span>&nbsp;↔&nbsp;</span><span>special&#x20;</span><Link to="tor-relay"><span>Tor&#x20;Relay</span></Link><span>&#x20;to&#x20;track&#x20;</span><Link to="bridge"><span>Bridge</span></Link><span>&#x20;list</span></cite></li></ol>
    <Link to="tor-relay#references"><button className="react-tooltip__ref-link">
          View 4 more
        </button></Link>
    </small></Tooltip>)
}