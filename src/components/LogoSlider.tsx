/**
 * Copyright(c) Roger Jiang
 */

import React from "react"
import startCase from "lodash/startCase"

interface SliderProps {
  children?: React.ReactNode
  top: MediaElement[]
  bot: MediaElement[]
  h?: number
  w?: number
}

type MediaElement = {
  title?: string
  Svg?: React.ComponentType<React.ComponentProps<"svg">>
  Img?: string
  h?: number
  w?: number
}

interface SliderRowProps {
  MediaElements: MediaElement[]
  config?: string
  h?: number
  w?: number
}

/**
 *
 * @param Img @string for @media source type for srcSet - AVIF > WEBP - transition all SVG to AVIF ONLY if >20% reduction in size
 * @returns
 */

function SliderRow({ MediaElements, config, h, w }: SliderRowProps) {
  function Slides() {
    return (
      <>
        {MediaElements.map(({ Svg, title, h, w, Img }, i) => {
          let srcProps = {}
          if (Svg)
            srcProps = {
              src: Svg.displayName,
            }
          if (Img)
            srcProps = {
              ...srcProps,
              srcSet: Img,
            }
          return (
            <>
              <img
                className={`inline-block transform-gpu rounded-sm opacity-10 transition-all visited:shadow-yellow-200 hover:bg-hex-blue hover:opacity-90 hover:shadow-inner hover:shadow-yellow-200 hover:-backdrop-hue-rotate-30 ${
                  config === "top"
                    ? "duration-700 hover:rounded-br-3xl hover:rounded-tl-3xl"
                    : "duration-1000 hover:rounded-bl-3xl hover:rounded-tr-3xl"
                }`}
                key={config + String(i)}
                loading="lazy"
                height={h || 60}
                style={{ height: `${h || 60}px` }}
                {...srcProps}
                alt={startCase(
                  Svg ? Svg.displayName?.slice(5, -4) : Img?.[0].slice(5, -4)
                )}
              />
              {config === "top" ? (
                <span
                  style={{
                    display: "inline-block",
                    height: "60px",
                    width: "75px",
                  }}
                />
              ) : (
                <span
                  style={{
                    display: "inline-block",
                    height: "60px",
                    width: "50px",
                  }}
                />
              )}
            </>
          )
        })}
      </>
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
    <div
      className="my-0"
      style={{ width: "100%", height: "154px" }}
    >
      <div
        className="inline-block transform-gpu animate-slide-fast overflow-visible whitespace-nowrap"
        style={{ height: "69px", width: "90%" }}
      >
        <SliderRow
          MediaElements={top}
          config="top"
          h={h}
          w={w}
        />
      </div>
      <div
        className="inline-block transform-gpu animate-slide-slow overflow-visible whitespace-nowrap"
        style={{ height: "69px", width: "90%" }}
      >
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
