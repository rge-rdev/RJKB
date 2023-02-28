import React from "react"

import DockerEditSVG from "@site/static/img/docker-edit.svg"
import DockerWorkingSVG from "@site/static/img/docker-working.svg"
import IconArrowDownCircleBlackSVG from "@site/static/img/icon-arrow-down-circle-black.svg"
import IconArrowLeftCircleBlackSVG from "@site/static/img/icon-arrow-left-circle-black.svg"
import IconArrowRightCircleBlackSVG from "@site/static/img/icon-arrow-right-circle-black.svg"
import IconArrowRopRightCircleBlackSVG from "@site/static/img/icon-arrow-rop-right-circle-black.svg"
import IconArrowTopLeftCircleBlackSVG from "@site/static/img/icon-arrow-top-left-circle-black.svg"
import IconArrowUpCircleBlackSVG from "@site/static/img/icon-arrow-up-circle-black.svg"
import IconBrainCircleColorSVG from "@site/static/img/icon-brain-circle-color.svg"
import IconCodeEditorDiamondColorSVG from "@site/static/img/icon-code-editor-diamond-color.svg"
import IconDockerColorSVG from "@site/static/img/icon-docker-color.svg"
import IconDocusaurusBlackSVG from "@site/static/img/icon-docusaurus-black.svg"
import IconDocusaurusColorSVG from "@site/static/img/icon-docusaurus-color.svg"
import IconDocusaurusGreySVG from "@site/static/img/icon-docusaurus-grey.svg"
import IconDownButtonCyanBlueSVG from "@site/static/img/icon-down-button-cyan-blue.svg"
import IconDownButtonDocusaurusGreenSVG from "@site/static/img/icon-down-button-docusaurus-green.svg"
import IconEsbuildColorSVG from "@site/static/img/icon-esbuild-color.svg"
import IconGitSVG from "@site/static/img/icon-git.svg"
import IconHtml5GreySVG from "@site/static/img/icon-html5-grey.svg"
import IconJavascriptBlackSVG from "@site/static/img/icon-javascript-black.svg"
import IconNodeJsBlackSVG from "@site/static/img/icon-node.js-black.svg"
import IconNodeJsColorSVG from "@site/static/img/icon-node.js-color.svg"
import IconReactBlackSVG from "@site/static/img/icon-react-black.svg"
import IconReactColorSVG from "@site/static/img/icon-react-color.svg"
import IconReactGreySVG from "@site/static/img/icon-react-grey.svg"
import IconRjnoteCodeEditorColorSVG from "@site/static/img/icon-rjnote-code-editor-color.svg"
import IconSpiralLoopBlackSVG from "@site/static/img/icon-spiral-loop-black.svg"
import IconTailwindcssBlackSVG from "@site/static/img/icon-tailwindcss-black.svg"
import IconTailwindcssColorSVG from "@site/static/img/icon-tailwindcss-color.svg"
import IconTypescriptBlackSVG from "@site/static/img/icon-typescript-black.svg"
import IconTypescriptColorSVG from "@site/static/img/icon-typescript-color.svg"
import IconTypesenseLogoColorOfficialSVG from "@site/static/img/icon-typesense-logo-color-official.svg"
import IconWebassemblyColorSVG from "@site/static/img/icon-webassembly-color.svg"
import LogoMdxColorSVG from "@site/static/img/logo-mdx-color.svg"
import LogoMdxLightSVG from "@site/static/img/logo-mdx-light.svg"
import LogoNgrokSVG from "@site/static/img/logo-ngrok.svg"
import LogoNodeJsColorSVG from "@site/static/img/logo-node.js-color.svg"
import LogoReactLiveColorSVG from "@site/static/img/logo-react-live-color.svg"
import LogoReduxOfficialColorSVG from "@site/static/img/logo-redux-official-color.svg"
import LogoTailwindcssOfficialColorSVG from "@site/static/img/logo-tailwindcss-official-color.svg"
import LogoTsNodeBlackSVG from "@site/static/img/logo-ts-node-black.svg"
import LogoTsNodeGreySVG from "@site/static/img/logo-ts-node-grey.svg"
import LogoTypesenseColorOfficialSVG from "@site/static/img/logo-typesense-color-official.svg"
import LogoSVG from "@site/static/img/logo.svg"
import LogoTextDockerBlackSVG from "@site/static/img/logo-text-docker-black.svg"
import LogoTextTypescriptBlackSVG from "@site/static/img/logo-text-typescript-black.svg"
import LogoTextTypescriptColorSVG from "@site/static/img/logo-text-typescript-color.svg"
import UndrawDocusaurusMountainSVG from "@site/static/img/undraw_docusaurus_mountain.svg"
import UndrawDocusaurusReactSVG from "@site/static/img/undraw_docusaurus_react.svg"
import UndrawDocusaurusTreeSVG from "@site/static/img/undraw_docusaurus_tree.svg"

interface SliderProps {
  children?: React.ReactNode
}

type MediaElement = {
  title?: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
}

function SVG_LOGO({ Svg, title }: MediaElement) {
  return (
    <Svg
      height={60}
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
  { Svg: IconHtml5GreySVG },
  { Svg: IconJavascriptBlackSVG },
  { Svg: IconNodeJsBlackSVG },
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
  { Svg: LogoMdxColorSVG },
  { Svg: LogoMdxLightSVG },
  { Svg: LogoNgrokSVG },
  { Svg: LogoNodeJsColorSVG },
  { Svg: LogoReactLiveColorSVG },
  {
    Svg: LogoReduxOfficialColorSVG,
  },
  {
    Svg: LogoTailwindcssOfficialColorSVG,
  },
  { Svg: LogoTsNodeBlackSVG },
  { Svg: LogoTsNodeGreySVG },
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
}

function SliderRow({ MediaElements, config }: SliderRowProps) {
  function Slides() {
    let customCSS = ""
    if (config === "top")
      customCSS += "px-5 hover:rounded-br-3xl hover:rounded-tl-3xl duration-700"
    if (config === "bot")
      customCSS +=
        "px-10 hover:rounded-bl-3xl hover:rounded-tr-3xl duration-1000"

    //inline-block opacity-10 hover:opacity-90 transition-all px-5 shadow-sm hover:shadow-lg rounded-sm hover:rounded-br-3xl hover:rounded-tl-3xl hover:animate-bounce
    return (
      <div className="inline-block">
        {MediaElements.map((props, i) => (
          <div
            className={`inline-block opacity-10 hover:opacity-90 hover:shadow-inner visited:shadow-yellow-200 hover:shadow-yellow-200 rounded-sm hover:-backdrop-hue-rotate-30  transition-all ${customCSS} `}
            key={config + String(i)}
          >
            <SVG_LOGO {...props} />
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

export default function Slider(props: SliderProps) {
  return (
    <div className="my-0 py-0">
      <div className="inline-block whitespace-nowrap overflow-hidden animate-slide-fasta">
        <SliderRow
          MediaElements={top}
          config="top"
        />
      </div>
      <div className="inline-block whitespace-nowrap overflow-hidden animate-slide-slowa">
        <SliderRow
          MediaElements={bot}
          config="bot"
        />
      </div>
    </div>
  )
}
