import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewSohkFDtACu9NCnPQt(){
  return (<Tooltip
  id="preview__SohkFDtACu9NCnPQt"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>tailwind.config.cjs</code></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><code>tailwind.config.js</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>to&#x20;config&#x20;tailwind&#x20;behavior&#x20;(colors/plugins/etc).&#x20;root&#x20;dir&#x20;of&#x20;project</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>setup&#x20;</span><Link to="/wiki/CSS/CSS-Stack/CSS-Utility-Framework/Tailwind-CSS/Tailwind-Setup/tailwindconfigcjs"><code>tailwind.config.cjs</code></Link><span>&nbsp;↔&nbsp;</span><span>add&#x20;</span><Link to="/wiki/Computer-Science/General-Computing-Concepts/Glob-Pattern"><code>Glob</code></Link><span>&#x20;to&#x20;include/exclude&#x20;dirpath/filetype&#x20;&#x26;&#x20;define&#x20;custom&#x20;utilities</span><CodeBlock language="jsx">{`/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: ["./src/**/*.{html,js}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}`}</CodeBlock><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Add&#x20;</span>Template&#x20;Path<span>&#x20;to&#x20;</span><Link to="/wiki/CSS/CSS-Stack/CSS-Utility-Framework/Tailwind-CSS/Tailwind-Setup/tailwindconfigcjs"><code>tailwind.config.cjs</code></Link><span>&#x20;</span><CodeBlock language="bash">{`/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: ["./src/**/*.{html,js}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Add&#x20;template&#x20;files&#x20;to&#x20;</span><Link to="/wiki/CSS/CSS-Stack/CSS-Utility-Framework/Tailwind-CSS/Tailwind-Setup/tailwindconfigcjs"><code>tailwind.config.cjs</code></Link><span>&#x20;</span><CodeBlock language="bash">{`/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>override&#x20;utility&#x20;class&#x20;in&#x20;theme&#x20;section&#x20;of&#x20;</span><Link to="/wiki/CSS/CSS-Stack/CSS-Utility-Framework/Tailwind-CSS/Tailwind-Setup/tailwindconfigcjs"><code>tailwind.config.cjs</code></Link><span>&#x20;</span><CodeBlock language="jsx">{`module.exports = {\n  theme: {\n    // Replaces all of the default \`opacity\` values\n    opacity: {\n      '0': '0',\n      '20': '0.2',\n      '40': '0.4',\n      '60': '0.6',\n      '80': '0.8',\n      '100': '1',\n    }\n  }\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><code>tailwindcss-cli&#x20;init&#x20;-p</code><span>&nbsp;↔&nbsp;</span><span>generate&#x20;new&#x20;</span><Link to="/wiki/CSS/CSS-Stack/CSS-Utility-Framework/Tailwind-CSS/Tailwind-Setup/tailwindconfigcjs"><code>tailwind.config.cjs</code></Link><span>&#x20;&#x26;&#x20;</span><Link to="/wiki/CSS/CSS-Stack/PostCSS/postcssconfigjs"><code>postcss.config.js</code></Link><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/CSS/CSS-Stack/CSS-Utility-Framework/Tailwind-CSS/Tailwind-Setup/tailwindconfigcjs#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}