import React from "react"
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
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Keyword"><span>JS&#x20;Keyword</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration"><span>Declaration</span></Link><span>&#x20;to&#x20;import&#x20;live&#x20;read-only&#x20;views&#x20;on&#x20;exports</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/JS/Library/Module/CommonJS"><span>CommonJS</span></Link><span>&#x20;</span><Link to="/wiki/JS/Library/Module/import"><code>import</code></Link><span></span><CodeBlock language="tsx">{`var importFunc1 = require("./module.js").importFunc1`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Node&#x20;Global&#x20;Object</span><span>&nbsp;↔&nbsp;</span><span>Top-Level&#x20;</span><Link to="/wiki/JS/JS-Language/Object"><span>Object</span></Link><span>&#x20;access&#x20;within&#x20;</span><Link to="/wiki/JS/Nodejs"><span>Node.js</span></Link><span>&#x20;w/o&#x20;req&#x20;</span><Link to="/wiki/JS/Library/Module/CommonJS"><span>CommonJS</span></Link><span>&#x20;</span><Link to="/wiki/JS/Library/Module/import"><code>import</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Find&#x20;</span><Link to="/wiki/JS/Library/Module/require"><code>require()</code></Link><span>/</span><Link to="/wiki/JS/Library/Module/import"><code>import</code></Link><span>/</span><Link to="/wiki/JS/Library/Module/ES-Module/export"><code>export</code></Link><span>&#x20;statements</span></cite></li><li><cite className="react-tooltip__ref-list"><span>MDX&#x20;support&#x20;</span><Link to="/wiki/JS/Library/Module/import"><code>import</code></Link><span>&#x20;</span><Link to="/wiki/JS/Library/Module/ES-Module/export"><code>export</code></Link><span>&#x20;statements&#x20;for&#x20;</span><Link to="/wiki/JS/Library/Module/ES-Module"><span>ES&#x20;Module</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>a&#x20;dumb&#x20;fix&#x20;to&#x20;allow&#x20;using&#x20;both&#x20;</span><Link to="/wiki/JS/Library/Module/require"><code>require()</code></Link><span>&#x20;AND&#x20;</span><Link to="/wiki/JS/Library/Module/import"><code>import</code></Link><span>&#x20;in&#x20;SAME&#x20;FILE</span><CodeBlock language="tsx">{`import { createRequire } from "module";\nconst require = createRequire(import.meta.url);`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/JS/Library/Module/import#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}