/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewBEQgN9EfEnBHJnx6S(){
  return (<Tooltip
  id="preview__BEQgN9EfEnBHJnx6S"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>import</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="js-keyword"><span>JS&#x20;Keyword</span></Link><span>&#x20;</span><Link to="declaration"><span>Declaration</span></Link><span>&#x20;to&#x20;import&#x20;live&#x20;read-only&#x20;views&#x20;on&#x20;exports</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>CommonJS</span></span><span>&#x20;</span><span ><code>import</code></span><span></span><CodeBlock language="tsx">{`var importFunc1 = require("./module.js").importFunc1`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Node&#x20;Global&#x20;Object</span><span>&nbsp;↔&nbsp;</span><span>Top-Level&#x20;</span><Link to="object"><span>Object</span></Link><span>&#x20;access&#x20;within&#x20;</span><Link to="node-js"><span>Node.js</span></Link><span>&#x20;w/o&#x20;req&#x20;</span><Link to="commonjs"><span>CommonJS</span></Link><span>&#x20;</span><Link to="import"><code>import</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Find&#x20;</span><span ><code>require()</code></span><span>/</span><span ><code>import</code></span><span>/</span><span ><code>export</code></span><span>&#x20;statements</span></cite></li><li><cite className="react-tooltip__ref-list"><span>MDX&#x20;support&#x20;</span><span ><code>import</code></span><span>&#x20;</span><span ><code>export</code></span><span>&#x20;statements&#x20;for&#x20;</span><span ><span>ES&#x20;Module</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>a&#x20;dumb&#x20;fix&#x20;to&#x20;allow&#x20;using&#x20;both&#x20;</span><span ><code>require()</code></span><span>&#x20;AND&#x20;</span><span ><code>import</code></span><span>&#x20;in&#x20;SAME&#x20;FILE</span><CodeBlock language="tsx">{`import { createRequire } from "module";\nconst require = createRequire(import.meta.url);`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    <Link to="import#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}