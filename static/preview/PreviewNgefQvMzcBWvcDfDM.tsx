/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewNgefQvMzcBWvcDfDM(){
  return (<Tooltip
  id="preview__NgefQvMzcBWvcDfDM"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Child</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="node"><code>Node</code></Link><span>&#x20;</span><b>directly&#x20;below</b><span>&#x20;a&#x20;given&#x20;</span><Link to="node"><code>Node</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 9 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>unlike&#x20;</span><span ><span>Parent</span></span><span>,&#x20;can&#x20;have&#x20;multiple&#x20;</span><span ><span>Child</span></span><span>&#x20;</span><span ><code>Node</code></span><span>s&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Descendant</span><span>&nbsp;↔&nbsp;</span><span>any&#x20;</span><Link to="child"><span>Child</span></Link><span>&#x20;(&#x26;&#x20;sub&#x20;children)&#x20;</span><Link to="node"><code>Node</code></Link><span>s</span></cite></li><li><cite className="react-tooltip__ref-list"><code>.firstElementChild</code><span>&nbsp;↔&nbsp;</span><span>to&#x20;select&#x20;first&#x20;</span><span ><code>Element</code></span><span>&#x20;</span><span ><span>Child</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>.lastElementChild</code><span>&nbsp;↔&nbsp;</span><span>to&#x20;select&#x20;last&#x20;</span><span ><code>Element</code></span><span>&#x20;</span><span ><span>Child</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>to&#x20;</em></b><Link to="dom-traversal"><code>Traverse</code></Link><b><em>&#x20;down&#x20;</em></b><Link to="child"><span>Child</span></Link><Link to="node"><code>Nodes</code></Link><span>&#x20;</span></cite></li></ol>
    <Link to="child#references"><button className="react-tooltip__ref-link">
          View 4 more
        </button></Link>
    </small></Tooltip>)
}