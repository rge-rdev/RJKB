import React from "react"
import MDXComponents from "@theme-original/MDXComponents"
// import { Link, Redirect } from "@docusaurus/router"
import { Link, Redirect } from "react-router-dom"
import Image from "@theme/IdealImage"
import { Tooltip } from "react-tooltip"
import tooltip_css from "react-tooltip/dist/react-tooltip.css"
import CodeBlock from "@theme/CodeBlock"
// import Preview from "../components/Preview"

export default {
  ...MDXComponents,
  Link,
  Redirect,
  Image,
  Tooltip,
  tooltip_css,
  CodeBlock,
  // Preview,
}
