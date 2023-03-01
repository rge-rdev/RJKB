import React from "react"
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
} from "../../static/img/svg_logos"

interface SliderProps {
  children?: React.ReactNode
  top: MediaElement[]
  bot: MediaElement[]
  h?: number
  w?: number
}

type MediaElement = {
  title?: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  h?: number
  w?: number
}

function SVG_LOGO({ Svg, title, h, w }: MediaElement) {
  return (
    <Svg
      height={h}
      width={w}
      role="img"
    />
  )
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

interface SliderRowProps {
  MediaElements: MediaElement[]
  config?: string
  h?: number
  w?: number
}

function SliderRow({ MediaElements, config, h, w }: SliderRowProps) {
  function Slides() {
    let customCSS = ""
    if (config === "top")
      customCSS += "px-5 hover:rounded-br-3xl hover:rounded-tl-3xl duration-700"
    if (config === "bot")
      customCSS +=
        "px-10 hover:rounded-bl-3xl hover:rounded-tr-3xl duration-1000"
    return (
      <div className="inline-block">
        {MediaElements.map((props, i) => (
          <div
            className={`inline-block opacity-10 hover:opacity-90 hover:shadow-inner visited:shadow-yellow-200 hover:shadow-yellow-200 rounded-sm hover:-backdrop-hue-rotate-30 hover:bg-hex-blue transition-all ${customCSS}`}
            key={config + String(i)}
          >
            <SVG_LOGO
              {...props}
              h={h}
              w={w}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <Slides />
      <Slides />
    </>
  )
}

export default function Slider({ top, bot, h, w }: SliderProps) {
  return (
    <div className="my-0 py-0 hover:bg-hero bg-prism">
      <div className="inline-block whitespace-nowrap overflow-hidden animate-slide-fast">
        <SliderRow
          MediaElements={top}
          config="top"
          h={h}
          w={w}
        />
      </div>
      <div className="inline-block whitespace-nowrap overflow-hidden animate-slide-slow">
        <SliderRow
          MediaElements={bot}
          config="bot"
          h={h}
          w={w}
        />
      </div>
    </div>
  )
}
