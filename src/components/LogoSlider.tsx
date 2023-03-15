import React from "react"

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
            className={`inline-block rounded-sm opacity-10 transition-all visited:shadow-yellow-200 hover:bg-hex-blue hover:opacity-90 hover:shadow-inner hover:shadow-yellow-200 hover:-backdrop-hue-rotate-30 ${customCSS}`}
            key={config + String(i)}
          >
            <SVG_LOGO
              {...props}
              h={h || props.h}
              w={props.w}
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
    <div className="hover:bg-hero bg-prism my-0 py-0">
      <div className="inline-block animate-slide-fast overflow-hidden whitespace-nowrap">
        <SliderRow
          MediaElements={top}
          config="top"
          h={h}
          w={w}
        />
      </div>
      <div className="inline-block animate-slide-slow overflow-hidden whitespace-nowrap">
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
