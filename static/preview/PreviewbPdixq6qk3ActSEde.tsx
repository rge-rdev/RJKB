/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewbPdixq6qk3ActSEde(){
  return (<Tooltip
  id="preview__bPdixq6qk3ActSEde"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Reverse&#x20;Proxy</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Reverse&#x20;Proxies</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="proxy"><span>Proxy</span></Link><span>&#x20;gateway&#x20;to&#x20;back-end</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>ngrok</span><span>&nbsp;↔&nbsp;</span><Link to="reverse-proxy"><span>Reverse&#x20;Proxy</span></Link><span>&#x20;</span><Link to="cli"><span>CLI</span></Link><span>&#x20;</span><Link to="dev-tool"><span>Dev&#x20;tool</span></Link><span>&#x20;to&#x20;build/test&#x20;</span><Link to="backend"><span>Backend</span></Link><span>&#x20;-&#x20;to&#x20;map&#x20;localhost&#x20;instance&#x20;to&#x20;remote&#x20;ngrok.io&#x20;subdomain&#x20;-&#x20;to&#x20;bypass&#x20;firewall/CORS-pain</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>NGINX</span></span><span>&#x20;acts&#x20;as&#x20;</span><span ><span>Reverse&#x20;Proxy</span></span><span>&#x20;to&#x20;redis&#x20;load&#x20;to&#x20;multiple&#x20;</span><span ><span>Backend</span></span><span>&#x20;</span><span ><span>Server</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>NGINX</span><span>&nbsp;↔&nbsp;</span><Link to="backend"><span>Backend</span></Link><span>&#x20;</span><Link to="server"><span>Server</span></Link><span>&#x20;gateway&#x20;to&#x20;</span><Link to="www"><code>Web</code></Link><span>,&#x20;</span><Link to="reverse-proxy"><span>Reverse&#x20;Proxy</span></Link><span>&#x20;to&#x20;handle&#x20;</span><Link to="http-request"><code>Requests</code></Link><span>/</span><Link to="caching"><code>Cache</code></Link><span>/load&#x20;balance&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}