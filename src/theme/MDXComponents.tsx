/**
 * Copyright(c) Roger Jiang
 */

import React from "react"
//@ts-ignore
import MDXComponents from "@theme-original/MDXComponents"
// import { Link, Redirect } from "@docusaurus/router" //! DON'T IMPORT FROM @DOCUSAURUS, AS PER DOCS - IT DOESN'T WORK!
import { Link, Redirect } from "react-router-dom"
//@ts-ignore
import { Tooltip } from "react-tooltip"
import CodeBlock from "@docusaurus/theme-classic/lib/theme/CodeBlock"
import Video from "../components/Video"

export default {
  ...MDXComponents,
  Tooltip,
  CodeBlock,
  Video,
}
