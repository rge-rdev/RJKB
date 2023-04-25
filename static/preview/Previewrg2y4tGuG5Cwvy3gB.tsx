import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewrg2y4tGuG5Cwvy3gB(){
  return (<Tooltip
  id="preview__rg2y4tGuG5Cwvy3gB"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>reflog</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>run&#x20;</span><Link to="/wiki/Dev-tool/git/git-command/reflog"><code>reflog</code></Link><span>&#x20;to&#x20;compact&#x20;&#x26;&#x20;write&#x20;new&#x20;.git&#x20;db</span><CodeBlock language="bash">{`git reflog expire --expire=now --all && git gc --prune=now --aggressive`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}