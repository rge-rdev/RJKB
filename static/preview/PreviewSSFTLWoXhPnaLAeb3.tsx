/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewSSFTLWoXhPnaLAeb3(){
  return (<Tooltip
  id="preview__SSFTLWoXhPnaLAeb3"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>CDN</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>CDN</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Content&#x20;Distribution&#x20;Network</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Content&#x20;Delivery&#x20;Network</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="proxy"><span>Proxy</span></Link><span>&#x20;network&#x20;to&#x20;store/serve&#x20;</span><Link to="web-resource"><span>Web&#x20;Resource</span></Link><span>&#x20;content</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 13 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>use&#x20;</span><span ><span>UNPKG</span></span><span>&#x20;as&#x20;</span><span ><span>CDN</span></span><span>&#x20;for&#x20;</span><span ><code>npm</code></span><span>&#x20;packages&#x20;when&#x20;</span><span ><span>CORS</span></span><span>&#x20;prevent&#x20;access&#x20;to&#x20;</span><span ><span>npmjs</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Top-Level&#x20;Await&#x20;for&#x20;Module</span></span><span>&#x20;for&#x20;fallback&#x20;</span><span ><span>CDN</span></span><span>&#x20;</span><span ><span>URL</span></span><span>&#x20;</span><span ><span>Module&#x20;Specifier</span></span><span>&#x20;</span><CodeBlock language="tsx">{`let lodash;\ntry {\n  lodash = await import("https://primary.cdn.com/lodash")\n} catch {\n  lodash = await import("https://fallback.cdn.com/lodash")\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Software&#x20;Repository</span><span>&nbsp;↔&nbsp;</span><Link to="cdn"><span>CDN</span></Link><span>&#x20;(&#x26;&#x20;registry)&#x20;to&#x20;store/access&#x20;</span><Link to="software"><span>Software</span></Link><span>&#x20;</span><Link to="package"><code>Packages</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>UNPKG</span><span>&nbsp;↔&nbsp;</span><Link to="cdn"><span>CDN</span></Link><span>&#x20;for&#x20;</span><Link to="npm"><code>npm</code></Link><span>&#x20;</span><Link to="package"><span>Package</span></Link><span>,&#x20;use&#x20;to&#x20;bypass&#x20;</span><Link to="cors"><span>CORS</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>CDN</span></span><span>&#x20;providers&#x20;are&#x20;geographically&#x20;distributed&#x20;to&#x20;maximise&#x20;coverage</span></cite></li></ol>
    <Link to="cdn#references"><button className="react-tooltip__ref-link">
          View 8 more
        </button></Link>
    </small></Tooltip>)
}