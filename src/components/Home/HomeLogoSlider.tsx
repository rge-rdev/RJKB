/**
 * Copyright(c) Roger Jiang
 */

import React from "react"
import LogoSlider from "../LogoSlider"

import {
  IconCodeEditorDiamondColorSVG,
  IconCSS3Black,
  IconDockerBlackSVG,
  IconDocusaurusBlackSVG,
  IconEsbuildColorSVG,
  IconGitBlackSVG,
  IconHTML5ColorSVG,
  IconJavascriptBlackSVG,
  IconNodeJSBlackSVG,
  IconReactBlackSVG,
  IconReactLiveBlackSVG,
  IconReduxOfficialBlackSVG,
  IconRjnoteCodeEditorColorSVG,
  IconTailwindcssBlackSVG,
  IconTypescriptBlackSVG,
  IconVSCodeColorSVG,
  IconWebassemblyBlackSVG,
  IconYarnBlackSVG,
  LogoDocSearchColorSVG,
  LogoMDXColorSVG,
  LogoNgrokSVG,
  LogoNodeJsColorSVG,
  LogoSwcColorDarkSVG,
  LogoTailwindcssOfficialColorSVG,
  LogoTextAxiosBlackSVG,
  LogoTextOnlyDockerBlackSVG,
  LogoTextReactRouterBlackSVG,
  LogoTextTypescriptBlackSVG,
  LogoTSNodeGreySVG,
  LogoTypesenseBlackSVG,
} from "../../../static/img/svg"

import LogoLinuxMascotColor_120avif from "./LogoLinuxMascotColor_120.avif"
import LogoLinuxMascotColor_120webp from "./LogoLinuxMascotColor_120.webp"
import LogoInkscape_120avif from "./LogoInkscape_120.avif"
import LogoInkscape_120webp from "./LogoInkscape_120.webp"
import LogoTextCanonicalUbuntuColor_120avif from "./LogoTextCanonicalUbuntuColor_120.avif"
import LogoTextCanonicalUbuntuColor_120webp from "./LogoTextCanonicalUbuntuColor_120.webp"

const top = [
  { Svg: IconDocusaurusBlackSVG },
  { Svg: LogoSwcColorDarkSVG },
  { Svg: IconDockerBlackSVG },
  { Svg: IconNodeJSBlackSVG },
  { Svg: IconReactBlackSVG },
  {
    Svg: IconReduxOfficialBlackSVG,
  },
  { Svg: IconEsbuildColorSVG },
  { Svg: IconHTML5ColorSVG },
  { Svg: IconCSS3Black },
  { Svg: IconJavascriptBlackSVG },
  { Svg: IconTypescriptBlackSVG },

  { Svg: LogoMDXColorSVG },
  { Svg: IconTailwindcssBlackSVG },
  {
    Img: `${LogoInkscape_120avif}, ${LogoInkscape_120webp}`,
  },
  {
    Svg: IconRjnoteCodeEditorColorSVG,
  },
  { Svg: IconWebassemblyBlackSVG },
  { Svg: IconReactLiveBlackSVG },
  { Svg: IconGitBlackSVG },
  { Svg: IconVSCodeColorSVG },
  { Svg: IconYarnBlackSVG },
  {
    Img: `${LogoLinuxMascotColor_120avif}, ${LogoLinuxMascotColor_120webp}`,
  },
  {
    Svg: IconCodeEditorDiamondColorSVG,
  },
  // { Svg: IconRustBlackSVG },
]
const bot = [
  { Svg: LogoDocSearchColorSVG, w: 380 },
  {
    Svg: LogoNodeJsColorSVG,
  },

  { Svg: LogoNgrokSVG },
  { Svg: LogoTSNodeGreySVG },
  {
    Svg: LogoTypesenseBlackSVG,
  },
  { Svg: LogoTextOnlyDockerBlackSVG },
  {
    Img: `${LogoTextCanonicalUbuntuColor_120avif}, ${LogoTextCanonicalUbuntuColor_120webp}`,
  },
  { Svg: LogoTextAxiosBlackSVG },
  { Svg: LogoTextReactRouterBlackSVG },
  {
    Svg: LogoTailwindcssOfficialColorSVG,
  },
  {
    Svg: LogoTextTypescriptBlackSVG,
  },
  //DUP
  {
    Svg: LogoNodeJsColorSVG,
  },

  { Svg: LogoNgrokSVG },
  { Svg: LogoTSNodeGreySVG },
  {
    Svg: LogoTypesenseBlackSVG,
  },
  { Svg: LogoTextOnlyDockerBlackSVG },
  {
    Img: `${LogoTextCanonicalUbuntuColor_120avif}, ${LogoTextCanonicalUbuntuColor_120webp}`,
  },
  { Svg: LogoTextAxiosBlackSVG },
  { Svg: LogoTextReactRouterBlackSVG },
  {
    Svg: LogoTailwindcssOfficialColorSVG,
  },
  {
    Svg: LogoTextTypescriptBlackSVG,
  },
]

export default function HomeLogoSlider() {
  return (
    <LogoSlider
      top={top}
      bot={bot}
      h={60}
    />
  )
}
