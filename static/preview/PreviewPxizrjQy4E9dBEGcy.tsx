/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewPxizrjQy4E9dBEGcy(){
  return (<Tooltip
  id="preview__PxizrjQy4E9dBEGcy"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Spread&#x20;Operator</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><code>...</code></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Spread</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator"><span>JS&#x20;Operator</span></Link><span>&#x20;to&#x20;return&#x20;comma&#x20;separated&#x20;list&#x20;from&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Spread-Operator/iterable"><span>iterable</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 11 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!equivalent&#x20;to&#x20;using&#x20;</span><span ><span>Destructuring</span></span><span>&#x20;using&#x20;</span><span ><span>Spread&#x20;Operator</span></span><span>&#x20;</span><code>const&#x20;arr3&#x20;=&#x20;[...arr1,&#x20;...arr2]</code><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!equivalent&#x20;to&#x20;</span><span ><code>.concat()</code></span><span>&#x20;+&#x20;</span><span ><span>Spread&#x20;Operator</span></span><span>&#x20;via&#x20;</span><code>const&#x20;flatArr&#x20;=&#x20;arr&#x20;&#x21D2;&#x20;[].concat(...arr);</code><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>sets&#x20;can&#x20;be&#x20;converted&#x20;to&#x20;</span><span ><span>Array</span></span><span>&#x20;using&#x20;</span><span ><span>Spread&#x20;Operator</span></span><span>&#x20;</span><CodeBlock language="jsx">{`const arr = [...new Set([1,1,2,3])]`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Spread&#x20;Operator</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><span>Enhanced&#x20;Object&#x20;Literals</span></span><b><em>&#x20;with&#x20;</em></b><span ><span>Spread&#x20;Operator</span></span><span>&#x20;</span><CodeBlock language="tsx">{`const abc = {\n  a: 1,\n  b: {\n    c: 3\n  }\n}\n\nconst abcd = {\n  ...abc,\n  d: 4\n}`}</CodeBlock></cite></li></ol>
    <Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Spread-Operator#references"><button className="react-tooltip__ref-link">
          View 6 more
        </button></Link>
    </small></Tooltip>)
}