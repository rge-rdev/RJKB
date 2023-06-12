/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewvKNQLg74XZmXPQ7bZ(){
  return (<Tooltip
  id="preview__vKNQLg74XZmXPQ7bZ"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Piece</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Pieces</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>file&#x20;</span><Link to="chunks"><code>Chunk</code></Link><span>&#x20;split&#x20;into&#x20;equal&#x20;</span><Link to="piece-size"><span>Piece&#x20;Size</span></Link><span>&#x20;parts&#x20;for&#x20;</span><Link to="bittorrent"><code>Torrent</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Choked</span><span>&nbsp;↔&nbsp;</span><span>when&#x20;</span><Link to="peer"><span>Peer</span></Link><span>&#x20;</span><b>refuse</b><span>&#x20;to&#x20;send&#x20;</span><Link to="piece"><span>Piece</span></Link><span>&#x20;||&#x20;on&#x20;</span><b>blacklist</b><span>&#x20;||&#x20;</span><b>maxed&#x20;out</b><span>&#x20;upload</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Seed</span><span>&nbsp;↔&nbsp;</span><Link to="peer"><span>Peer</span></Link><span>&#x20;with&#x20;complete&#x20;</span><Link to="bittorrent"><code>Torrent</code></Link><span>&#x20;&#x26;&#x20;upload&#x20;</span><Link to="piece"><code>Pieces</code></Link><span>&#x20;to&#x20;</span><Link to="swarm"><span>Swarm</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Piece&#x20;Hash</span><span>&nbsp;↔&nbsp;</span><span>unique&#x20;fingerprint&#x20;to&#x20;verify&#x20;</span><Link to="piece"><code>Pieces</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Piece&#x20;Affinity</span><span>&nbsp;↔&nbsp;</span><span>to&#x20;optimize&#x20;by&#x20;download&#x20;more&#x20;adjacent&#x20;</span><span ><code>Pieces</code></span><span>&#x20;for&#x20;better&#x20;I/O</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Interested</span><span>&nbsp;↔&nbsp;</span><span>to&#x20;express&#x20;wish&#x20;to&#x20;download&#x20;</span><Link to="piece"><span>Piece</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="piece#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}