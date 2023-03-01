import React from "react"
import LogoSlider from "../LogoSlider"

import {
  DockerEditSVG,
  DockerWorkingSVG,
  IconArrowDownCircleBlackSVG,
  IconArrowLeftCircleBlackSVG,
  IconArrowRightCircleBlackSVG,
  IconArrowRopRightCircleBlackSVG,
  IconArrowTopLeftCircleBlackSVG,
  IconArrowUpCircleBlackSVG,
  IconBrainCircleColorSVG,
  IconCodeEditorDiamondColorSVG,
  IconDockerColorSVG,
  IconDocusaurusBlackSVG,
  IconDocusaurusColorSVG,
  IconDocusaurusGreySVG,
  IconDownButtonCyanBlueSVG,
  IconDownButtonDocusaurusGreenSVG,
  IconEsbuildColorSVG,
  IconGitSVG,
  IconHTML5GreySVG,
  IconJavascriptBlackSVG,
  IconNodeJSBlackSVG,
  IconNodeJSColorSVG,
  IconReactBlackSVG,
  IconReactColorSVG,
  IconReactGreySVG,
  IconRjnoteCodeEditorColorSVG,
  IconSpiralLoopBlackSVG,
  IconTailwindcssBlackSVG,
  IconTailwindcssColorSVG,
  IconTypescriptBlackSVG,
  IconTypescriptColorSVG,
  IconTypesenseLogoColorOfficialSVG,
  IconWebassemblyColorSVG,
  LogoMDXColorSVG,
  LogoMDXLightSVG,
  LogoNgrokSVG,
  LogoNodeJSColorSVG,
  LogoReactLiveColorSVG,
  LogoReduxOfficialColorSVG,
  LogoTailwindcssOfficialColorSVG,
  LogoTSNodeBlackSVG,
  LogoTSNodeColorSVG,
  LogoTSNodeGreySVG,
  LogoTypesenseColorOfficialSVG,
  LogoSVG,
  LogoTextDockerBlackSVG,
  LogoTextTypescriptBlackSVG,
  LogoTextTypescriptColorSVG,
  UndrawDocusaurusMountainSVG,
  UndrawDocusaurusReactSVG,
  UndrawDocusaurusTreeSVG,
} from "../../../static/img/svg_logos"

type MediaElement = {
  title?: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
}

const top = [
  { Svg: IconBrainCircleColorSVG },
  {
    Svg: IconCodeEditorDiamondColorSVG,
  },
  { Svg: IconDocusaurusBlackSVG },
  { Svg: IconEsbuildColorSVG },
  { Svg: IconGitSVG },
  { Svg: IconHTML5GreySVG },
  { Svg: IconJavascriptBlackSVG },
  { Svg: IconNodeJSBlackSVG },
  { Svg: IconReactBlackSVG },
  {
    Svg: IconRjnoteCodeEditorColorSVG,
  },
  { Svg: IconSpiralLoopBlackSVG },
  { Svg: IconTailwindcssBlackSVG },
  { Svg: IconTypescriptBlackSVG },
  {
    Svg: IconTypesenseLogoColorOfficialSVG,
  },
  { Svg: IconWebassemblyColorSVG },
]
const bot = [
  { Svg: LogoMDXColorSVG },
  { Svg: LogoMDXLightSVG },
  { Svg: LogoNgrokSVG },
  { Svg: LogoNodeJSColorSVG },
  { Svg: LogoReactLiveColorSVG },
  {
    Svg: LogoReduxOfficialColorSVG,
  },
  {
    Svg: LogoTailwindcssOfficialColorSVG,
  },
  { Svg: LogoTSNodeBlackSVG },
  { Svg: LogoTSNodeGreySVG },
  {
    Svg: LogoTypesenseColorOfficialSVG,
  },
  { Svg: LogoSVG },
  { Svg: LogoTextDockerBlackSVG },
  {
    Svg: LogoTextTypescriptBlackSVG,
  },

  {
    Svg: UndrawDocusaurusMountainSVG,
  },
  {
    Svg: UndrawDocusaurusReactSVG,
  },
  { Svg: UndrawDocusaurusTreeSVG },
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
