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
  LogoInkscapeSVG,
  LogoLinuxMascotColorSVG,
  LogoMDXColorSVG,
  LogoNgrokSVG,
  LogoNodeJsColorSVG,
  LogoSwcColorDarkSVG,
  LogoTailwindcssOfficialColorSVG,
  LogoTextAxiosBlackSVG,
  LogoTextCanonicalUbuntuColorSVG,
  LogoTextOnlyDockerBlackSVG,
  LogoTextReactRouterBlackSVG,
  LogoTextTypescriptBlackSVG,
  LogoTSNodeGreySVG,
  LogoTypesenseBlackSVG,
} from "../../../static/img/svg"

const top = [
  { Svg: IconYarnBlackSVG },
  { Svg: LogoSwcColorDarkSVG },
  { Svg: IconDockerBlackSVG },
  {
    Svg: IconCodeEditorDiamondColorSVG,
  },
  { Svg: IconDocusaurusBlackSVG },
  { Svg: IconEsbuildColorSVG },
  { Svg: IconGitBlackSVG },
  { Svg: IconHTML5ColorSVG },
  { Svg: IconCSS3Black },
  { Svg: IconJavascriptBlackSVG },
  { Svg: IconTypescriptBlackSVG },
  { Svg: IconNodeJSBlackSVG },
  { Svg: IconReactBlackSVG },
  { Svg: LogoMDXColorSVG },
  { Svg: IconTailwindcssBlackSVG },
  { Svg: LogoInkscapeSVG },
  {
    Svg: IconRjnoteCodeEditorColorSVG,
  },

  { Svg: IconWebassemblyBlackSVG },
  {
    Svg: LogoLinuxMascotColorSVG,
  },
  {
    Svg: IconReduxOfficialBlackSVG,
  },
  { Svg: IconReactLiveBlackSVG },
  { Svg: IconVSCodeColorSVG },
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
  { Svg: LogoTextCanonicalUbuntuColorSVG },
  { Svg: LogoTextAxiosBlackSVG },
  { Svg: LogoTextReactRouterBlackSVG },
  {
    Svg: LogoTailwindcssOfficialColorSVG,
  },
  {
    Svg: LogoTextTypescriptBlackSVG,
  },
  //DUP
  { Svg: LogoNgrokSVG },
  { Svg: LogoTSNodeGreySVG },
  {
    Svg: LogoTypesenseBlackSVG,
  },
  { Svg: LogoTextOnlyDockerBlackSVG },
  { Svg: LogoTextCanonicalUbuntuColorSVG },
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
