import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewxhbgAdxGLt6v5xdnG(){
  return (<Tooltip
  id="preview__xhbgAdxGLt6v5xdnG"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>app.use()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>to&#x20;use&#x20;</span><Link to="/wiki/JS/Nodejs/Express/Express-middleware"><span>Express&#x20;middleware</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/JS/Nodejs/Express/Express-Methods/express/appuse"><code>app.use()</code></Link><span>&#x20;for&#x20;custom&#x20;404&#x20;page</span><CodeBlock language="tsx">{`app.use((req,res) => {\n  res.type("text/plain")\n  res.status(404)\n  res.send("404 - Not Found")\n})`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><Link to="/wiki/JS/Nodejs/Express/Express-Methods/express/appuse"><code>app.use()</code></Link><span>&#x20;for&#x20;custom&#x20;500&#x20;page&#x20;</span><CodeBlock language="tsx">{`app.use((err, req, res, next) => {\n  console.error(err.message)\n  res.type("text/plain")\n  res.status(500)\n  res.send("500 - Server Error")\n})`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}