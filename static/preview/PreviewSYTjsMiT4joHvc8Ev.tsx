/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewSYTjsMiT4joHvc8Ev(){
  return (<Tooltip
  id="preview__SYTjsMiT4joHvc8Ev"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>import()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator"><span>JS&#x20;Operator</span></Link><span>&#x20;to&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Runtime"><code>Dynamically</code></Link><span>&#x20;load&#x20;</span><Link to="/wiki/JS/Library/Module"><span>Module</span></Link><span>&#x20;using&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise"><code>Promise</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/import"><code>import()</code></Link></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;use&#x20;</span><span ><code>import()</code></span><span>&#x20;to&#x20;load&#x20;code&#x20;on&#x20;demand</span><CodeBlock language="tsx">{`button.addEventListener("click", e => {\n  import("./dialog_box")\n    .then(db => db.open())\n    .catch(err => console.error(err))\n})`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;use&#x20;</span><span ><code>import()</code></span><span>&#x20;to&#x20;conditionally&#x20;load&#x20;</span><span ><span>Module</span></span><span>&#x20;</span><CodeBlock language="tsx">{`if (isLegacyPlatform()) {\n  import("./alt-polyfill-module")\n    .then(...)\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;use&#x20;</span><span ><code>import()</code></span><span>&#x20;with&#x20;dynamically&#x20;computed&#x20;filenames&#x20;via&#x20;</span><span ><span>Template&#x20;Literal</span></span><span></span><CodeBlock language="tsx">{`import(\`messages_\${getLocale()}.mjs\`)\n  .then(...)`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}