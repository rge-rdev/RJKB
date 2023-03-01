import React from "react"
import LogoSlider from "../LogoSlider"

import {
  IconArrowDownCircleBlackSVG,
  IconArrowLeftCircleBlackSVG,
  IconArrowRightCircleBlackSVG,
  IconArrowRopRightCircleBlackSVG,
  IconArrowTopLeftCircleBlackSVG,
  IconArrowUpCircleBlackSVG,
  IconBrainCircleColorSVG,
  IconCodeEditorDiamondColorSVG,
  IconCSS3Black,
  IconCSS3Color,
  IconDockerBlackSVG,
  IconDockerColorSVG,
  IconDocusaurusBlackSVG,
  IconDocusaurusColorSVG,
  IconDocusaurusGreySVG,
  IconDownButtonCyanBlueSVG,
  IconDownButtonDocusaurusGreenSVG,
  IconEsbuildColorSVG,
  IconGitBlackSVG,
  IconGitSVG,
  IconHTML5GreySVG,
  IconJavascriptBlackSVG,
  IconNodeJSBlackSVG,
  IconNodeJSColorSVG,
  IconReactBlackSVG,
  IconReactColorSVG,
  IconReactGreySVG,
  IconReactLiveBlackSVG,
  IconReactLiveColorSVG,
  IconReduxOfficialBlackSVG,
  IconReduxOfficialColorSVG,
  IconRjnoteCodeEditorColorSVG,
  IconSpiralLoopBlackSVG,
  IconTailwindcssBlackSVG,
  IconTailwindcssColorSVG,
  IconTypescriptBlackSVG,
  IconTypescriptColorSVG,
  IconWebassemblyBlackSVG,
  IconWebassemblyColorSVG,
  IconYarnBlackSVG,
  LogoDocSearchColorSVG,
  LogoMDXColorSVG,
  LogoMDXLightSVG,
  LogoNgrokSVG,
  LogoNodeJSColorSVG,
  LogoSVG,
  LogoSwcColorDarkSVG,
  LogoTailwindcssOfficialColorSVG,
  LogoTextDockerBlackSVG,
  LogoTextTypescriptBlackSVG,
  LogoTextTypescriptColorSVG,
  LogoTSNodeBlackSVG,
  LogoTSNodeColorSVG,
  LogoTSNodeGreySVG,
  LogoTypesenseBlackSVG,
  LogoTypesenseColorSVG,
  UndrawDocusaurusMountainSVG,
  UndrawDocusaurusReactSVG,
  UndrawDocusaurusTreeSVG,
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
  { Svg: IconHTML5GreySVG },
  { Svg: IconCSS3Black },
  { Svg: IconJavascriptBlackSVG },
  { Svg: IconNodeJSBlackSVG },
  { Svg: IconReactBlackSVG },
  {
    Svg: IconRjnoteCodeEditorColorSVG,
  },
  { Svg: IconTailwindcssBlackSVG },
  { Svg: IconTypescriptBlackSVG },

  { Svg: IconWebassemblyBlackSVG },
  { Svg: UndrawDocusaurusTreeSVG },
  { Svg: LogoMDXColorSVG },
  {
    Svg: IconReduxOfficialBlackSVG,
  },
  { Svg: IconReactLiveBlackSVG },
]
const bot = [
  { Svg: LogoDocSearchColorSVG, w: 476 },

  { Svg: LogoNgrokSVG },
  { Svg: LogoNodeJSColorSVG },

  {
    Svg: LogoTailwindcssOfficialColorSVG,
  },
  { Svg: LogoTSNodeGreySVG },
  {
    Svg: LogoTypesenseBlackSVG,
  },
  // { Svg: LogoTextDockerBlackSVG },
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
