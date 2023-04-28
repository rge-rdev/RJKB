/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewJwzSLir34jmjhnJX3(){
  return (<Tooltip
  id="preview__JwzSLir34jmjhnJX3"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>createServer()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/Nodejs/Node-Stack/Node-API/http"><code>http</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Prototypal-Inheritance/Static-Method"><span>Static&#x20;Method</span></Link><span>&#x20;to&#x20;create&#x20;new&#x20;</span><Link to="/wiki/Computer-Science/Computer-Network/Network-Node/Server/Static-Web-Server/HTTP-Server"><span>HTTP&#x20;Server</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/JS/Nodejs/Node-Stack/Node-API/http/createServer"><code>createServer()</code></Link><span>&#x20;to&#x20;log&#x20;&#x22;Hello&#x20;World&#x22;</span><CodeBlock language="tsx">{`const http = require("http")\nconst port = process.env.PORT || 3000\n\nconst server = http.createServer((req,res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" })\n  res.end("Hello World")\n})\n\nserver.listen(port, () => console.log(\`server listening on port \${port} - press Ctrl+C to exit\`))`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}