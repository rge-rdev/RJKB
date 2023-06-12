/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewZcqBoxwYmEieFsSzX(){
  return (<Tooltip
  id="preview__ZcqBoxwYmEieFsSzX"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Commit</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Commits</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>snapshot&#x20;of&#x20;file/</span><Link to="source-code"><code>Code</code></Link><span>&#x20;state,&#x20;with&#x20;</span><Link to="uid"><span>UID</span></Link><span>&#x20;SHA&#x20;hash</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 32 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Head</span><span>&nbsp;↔&nbsp;</span><span>most&#x20;recent&#x20;</span><Link to="commit"><span>Commit</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Head</span></span><span>&#x20;moves&#x20;forward&#x20;with&#x20;subsequent&#x20;</span><span ><code>Commits</code></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Git&#x20;Repo</span><span>&nbsp;↔&nbsp;</span><span>collection&#x20;of&#x20;</span><Link to="commit"><code>Commits</code></Link><span>&#x20;for&#x20;project&#x20;</span><Link to="diff"><span>Diff</span></Link><span>&#x20;history</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Staging</span><span>&nbsp;↔&nbsp;</span><span>list&#x20;of&#x20;files/code&#x20;to&#x20;add&#x20;to&#x20;next&#x20;</span><Link to="commit"><span>Commit</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Commit&#x20;History</span><span>&nbsp;↔&nbsp;</span><span>log&#x20;of&#x20;previous&#x20;</span><Link to="commit"><code>Commits</code></Link><span>&#x20;</span></cite></li></ol>
    <Link to="commit#references"><button className="react-tooltip__ref-link">
          View 27 more
        </button></Link>
    </small></Tooltip>)
}