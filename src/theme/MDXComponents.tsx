import React from "react"
import MDXComponents from "@theme-original/MDXComponents"
import { Redirect } from "@docusaurus/router"
import Image from "@theme/IdealImage"
import { Tooltip } from "react-tooltip"
import tooltip_css from "react-tooltip/dist/react-tooltip.css"
// import Preview from "../components/Preview"

export default {
  ...MDXComponents,
  Redirect,
  Image,
  Tooltip,
  tooltip_css,
  // Preview,
}
