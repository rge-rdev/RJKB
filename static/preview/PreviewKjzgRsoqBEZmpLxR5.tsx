/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewKjzgRsoqBEZmpLxR5(){
  return (<Tooltip
  id="preview__KjzgRsoqBEZmpLxR5"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Swarm</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>group&#x20;of&#x20;</span><Link to="peer"><code>Peers</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>.torrent</code><span>&nbsp;↔&nbsp;</span><span>metadata&#x20;file&#x20;to&#x20;describe&#x20;torrent&#x20;content&#x20;(name,&#x20;size,&#x20;checksum),&#x20;</span><span ><span>Tracker</span></span><span>&#x20;locations&#x20;to&#x20;connect&#x20;to&#x20;</span><span ><span>Swarm</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Peer</span><span>&nbsp;↔&nbsp;</span><Link to="bittorrent"><span>Bittorrent</span></Link><span>&#x20;</span><Link to="client"><span>Client</span></Link><span>&#x20;instance&#x20;connect&#x20;to&#x20;</span><Link to="swarm"><span>Swarm</span></Link><span>&#x20;||&#x20;user&#x20;to&#x20;connect&#x20;to&#x20;</span><Link to="p-2-p"><span>P2P</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Seed</span><span>&nbsp;↔&nbsp;</span><Link to="peer"><span>Peer</span></Link><span>&#x20;with&#x20;complete&#x20;</span><Link to="bittorrent"><code>Torrent</code></Link><span>&#x20;&#x26;&#x20;upload&#x20;</span><Link to="piece"><code>Pieces</code></Link><span>&#x20;to&#x20;</span><Link to="swarm"><span>Swarm</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>LSD</span><span>&nbsp;↔&nbsp;</span><span>(</span><em>mechanism</em><span>)&#x20;to&#x20;discover&#x20;</span><Link to="peer"><code>Peers</code></Link><span>&#x20;</span><Link to="announce"><span>Announce</span></Link><span>&#x20;to&#x20;</span><Link to="swarm"><span>Swarm</span></Link><span>&#x20;via&#x20;HTTP&#x20;over&#x20;</span><Link to="udp"><code>UDP</code></Link><span>-multicast&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Announce</span><span>&nbsp;↔&nbsp;</span><span>to&#x20;send&#x20;</span><Link to="get"><code>GET</code></Link><span>&#x20;request&#x20;to&#x20;</span><Link to="tracker"><span>Tracker</span></Link><span>&#x20;to&#x20;announce&#x20;presence&#x20;to&#x20;</span><Link to="swarm"><span>Swarm</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="swarm#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}