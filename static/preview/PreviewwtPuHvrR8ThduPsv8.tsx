import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewwtPuHvrR8ThduPsv8(){
  return (<Tooltip
  id="preview__wtPuHvrR8ThduPsv8"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>_.camelCase(string)</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>return&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/string"><code>string</code></Link><span>&#x20;with&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/How-memory-allocated-to-Primitive-Reference-values/Primitive-Value/Stored-in-EC-in-Call-Stack/Unique-Identifier-created-to-reference-Primitive-Variable/Identifier/camelCase"><span>camelCase</span></Link><span>&#x20;(removes&#x20;delimiters:&#x20;whitespace,&#x20;_&#x20;&#x26;&#x20;-)</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!source&#x20;code&#x20;for&#x20;</span><Link to="/wiki/JS/Library/lodash/Lodash-String-methods/camelCasestring"><code>_.camelCase(string)</code></Link><span>&#x20;</span><CodeBlock language="jsx">{`var camelCase = createCompounder(function(result, word, index) {\n  word = word.toLowerCase();\n  return result + (index ? capitalize(word) : word);\n})`}</CodeBlock><span>&#x20;</span><CodeBlock language="jsx">{`function createCompounder(callback) {\n  return function(string) {\n    return arrayReduce(words(deburr(string.replace(reApos, '')), callback, '');\n  );\n}`}</CodeBlock><span>&#x20;</span><CodeBlock language="jsx">{`function arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n    length = array == null ? 0 : array.length;\n  \n  if(initAccum && length) {\n    accumulator = array[++index];\n  }\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n  return accumulator;\n}`}</CodeBlock><span>&#x20;</span><CodeBlock language="jsx">{`function iteratee(func) {\n  return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));\n}`}</CodeBlock><span>&#x20;</span><CodeBlock language="jsx">{`function baseIteratee(value`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/JS/Library/lodash"><code>lodash</code></Link><span>&#x20;provides&#x20;utility&#x20;for&#x20;converting&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/string"><code>string</code></Link><span>&#x20;to&#x20;</span><Link to="/wiki/JS/Library/lodash/Lodash-String-methods/camelCasestring"><code>_.camelCase(string)</code></Link><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}