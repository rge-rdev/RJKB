import React from "react"
//@ts-ignore
import MDXComponents from "@theme-original/MDXComponents"
// import { Link, Redirect } from "@docusaurus/router" //! DON'T IMPORT FROM @DOCUSAURUS, AS PER DOCS - IT DOESN'T WORK!
import { Link, Redirect } from "react-router-dom"
//@ts-ignore
import Image from "@theme/IdealImage"
import { Tooltip } from "react-tooltip"
// import tooltip_css from "react-tooltip/dist/react-tooltip.css" //paste raw css inside custom.css to avoid webpack warnings during build
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"

export default {
  ...MDXComponents,
  Link,
  Redirect,
  Image,
  Tooltip,
  CodeBlock,
}
