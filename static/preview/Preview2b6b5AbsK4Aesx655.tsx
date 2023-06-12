/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview2b6b5AbsK4Aesx655(){
  return (<Tooltip
  id="preview__2b6b5AbsK4Aesx655"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>jq</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="cli"><span>CLI</span></Link><span>&#x20;</span><Link to="dev-tool"><span>Dev&#x20;tool</span></Link><span>&#x20;to&#x20;work&#x20;JSON&#x20;.&#x20;</span><Link to="zero-deps"><span>Zero&#x20;Deps</span></Link><span>&#x20;</span><Link to="c"><span>C</span></Link><span>&#x20;</span><Link to="executable"><code>Binary</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>install&#x20;</span><span ><code>jq</code></span><span></span><CodeBlock language="bash">{`chocolatey install jq`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>convert&#x20;</span><span ><span>JSON</span></span><span>&#x20;into&#x20;</span><span ><span>JSONL</span></span><span>&#x20;via&#x20;</span><span ><code>jq</code></span><span>&#x20;</span><CodeBlock language="bash">{`cat __docs.json | jq -c .[] > __docs.jsonl`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}