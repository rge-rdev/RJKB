/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewccbz6ED6jedgP5Qe7(){
  return (<Tooltip
  id="preview__ccbz6ED6jedgP5Qe7"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>brotli-webpack-plugin</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/Computer-Science/Computer-Language/Computer/Software/Plugin"><span>Plugin</span></Link><span>&#x20;to&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/Compression"><code>Compress</code></Link><span>&#x20;(js|css|html|svg)&#x20;bundle&#x20;assets&#x20;with&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/Compression/brotli"><span>brotli</span></Link><span>&#x20;|&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/Compression/zlib"><span>zlib</span></Link><span>&#x20;|&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/Compression/iltorb"><span>iltorb</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>add&#x20;</span><span ><code>brotli-webpack-plugin</code></span><span>&#x20;to&#x20;</span><span ><span>Webpack</span></span><span>&#x20;</span><CodeBlock language="tsx">{`var BrotliPlugin = require('brotli-webpack-plugin');\nmodule.exports = {\n    plugins: [\n        new BrotliPlugin({\n            asset: '[path].br[query]',\n            test: /\.(js|css|html|svg)\$/,\n            threshold: 10240,\n            minRatio: 0.8\n        })\n    ]\n}`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}