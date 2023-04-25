import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewo3B2jWnjmRDxh4yw8(){
  return (<Tooltip
  id="preview__o3B2jWnjmRDxh4yw8"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>JSONL</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><code>.jsonl</code></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>JSON&#x20;Lines</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>newline-delimited&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/JSON"><span>JSON</span></Link><span>&#x20;to&#x20;store&#x20;data&#x20;struct&#x20;for&#x20;easier&#x20;record-by-record&#x20;processing</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><Link to="/wiki/Computer-Science/Data-Structure/JSON/JSONL"><span>JSONL</span></Link><span>&#x20;delimit&#x20;by&#x20;&#x22;</span><code>\n</code><span>&#x22;&#x20;|&#x20;&#x22;</span><code>\r\n</code><span>&#x22;&#x20;-&#x20;to&#x20;replace&#x20;comma&#x20;delimiter</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Typesense&#x20;Document</span><span>&nbsp;↔&nbsp;</span><span>batch&#x20;import&#x20;docs&#x20;collection&#x20;as&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/JSON/JSONL"><code>`.jsonl`</code></Link><span>&#x20;|&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/Array/Tuple/Tuple-useful-for-reping-ordered-sequence-of-elements-ie-CSV-files/CSV"><span>CSV</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>import&#x20;docs&#x20;as&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/JSON/JSONL"><span>JSONL</span></Link><span>&#x20;via&#x20;typesense&#x20;API&#x20;client&#x20;</span><CodeBlock language="tsx">{`const documentsInJsonl = await fs.readFile("documents.jsonl");\nclient.collections('companies').documents().import(documentsInJsonl, {action: 'create', batch_size: 200});`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>convert&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/JSON"><span>JSON</span></Link><span>&#x20;into&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/JSON/JSONL"><span>JSONL</span></Link><span>&#x20;via&#x20;</span><Link to="/wiki/Dev-tool/jq"><code>jq</code></Link><span>&#x20;</span><CodeBlock language="bash">{`cat __docs.json | jq -c .[] > __docs.jsonl`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}