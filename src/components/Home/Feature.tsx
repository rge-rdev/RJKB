/**
 * Copyright(c) Roger Jiang
 */

import React, { useEffect, useRef, useState, useMemo } from "react"
import { block } from "million/react"
import Video from "../Video"
import kebabCase from "lodash/kebabCase"

type FeatureItem = {
  title: string
  SVG?: React.ComponentType<React.ComponentProps<"svg">>
  img_url?: [string, string]
  alt?: string
  vid_path?: string
  poster?: string
  inline?: boolean
  w?: number
  h?: number
  description?: JSX.Element
  lazy?: boolean
  i: number
}

function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [seen, setSeen] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (seen) return
        if (entry.isIntersecting) {
          setSeen(true)
          return setIsIntersecting(entry.isIntersecting)
        }
      }),
    [seen]
  )

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer, seen])

  return isIntersecting
}

const SVG_BLOCK = block(({ Svg }) => (
  <Svg
    className="h-48 w-48 items-center"
    role="img"
  />
))
export default function Feature({
  title,
  SVG: Svg,
  description,
  img_url,
  alt,
  vid_path,
  poster,
  inline,
  w,
  h,
  lazy,
  i,
}: FeatureItem) {
  const ref_feat = useRef(null)
  const feat_in_viewport = useIsInViewport(ref_feat)

  return (
    <div
      id={title}
      ref={ref_feat}
      className="ml-0 box-border w-full flex-[0_0_100%] px-4 py-0 md:max-w-[50%] lg:max-w-[33.3333%]"
      style={{
        visibility: feat_in_viewport ? "visible" : "hidden",
        position: "relative",
        animation: feat_in_viewport ? `slideup ${1 + i * 0.25}s` : "none",
        animationDelay: `${i * 0.1}s`,
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className={`group m-1 flex justify-center ${
          img_url
            ? "not:hover:delay-1000 hover:from-neutral-1000 transform-gpu rounded-br-2xl rounded-tl-2xl bg-gradient-to-t from-neutral-300 to-cyan-300 transition-all duration-1000 hover:rounded-3xl hover:from-neutral-100 hover:to-cyan-500 hover:opacity-90 dark:bg-gradient-to-t dark:from-sky-500 dark:to-emerald-900 hover:dark:from-sky-300 hover:dark:to-sky-900"
            : ""
        }`}
      >
        {Svg && <SVG_BLOCK Svg={Svg} />}
        {img_url && !vid_path && (
          <picture>
            <source
              srcSet={img_url[0]}
              type="image/avif"
            />
            <img
              loading={`${lazy ? "lazy" : "eager"}`}
              alt={alt}
              src={img_url[1]}
              className={`items-center ${h ? "h-64" : "h-48 w-48"}`}
            />
          </picture>
        )}
        {vid_path && !img_url && (
          <Video
            title={title}
            src={vid_path}
            poster={poster}
            w={350}
            className="max-w-full"
          />
        )}
        {img_url && vid_path && (
          <div
            className="block"
            style={{ height: "260px", width: "366px" }}
          >
            <div
              className={`${inline ? "inline-flex " : ""}text-center`}
              style={{
                width: `${inline ? "144px" : "366px"}`,
                height: `${inline ? "260px" : "144px"}`,
                verticalAlign: "top",
              }}
            >
              <picture>
                <source
                  srcSet={img_url[0]}
                  type="image/avif"
                />
                <img
                  loading={`${lazy ? "lazy" : "eager"}`}
                  alt={alt}
                  src={img_url[1]}
                  className="h-36 w-36 items-center"
                />
              </picture>
            </div>
            <div
              className={`${inline ? "inline-flex " : ""}text-center px-2`}
              style={{
                width: `${w || (h && "132")}px`,
                height: `${h ? h + "px" : "auto"}`,
              }}
            >
              <Video
                title={title}
                src={vid_path}
                poster={poster}
                w={w || 350}
                h={h}
                className="max-w-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="group h-auto w-auto px-4 text-center">
        <h3 className="transform-gpu rounded-t-full bg-gradient-to-tr from-cyan-50/75 to-cyan-300/75 font-extrabold text-slate-900 shadow-inner shadow-teal-400 duration-1000 group-hover:to-cyan-50 dark:from-cyan-800/75 dark:text-cyan-100 dark:group-hover:to-emerald-700">
          <span
            className="text-neutral-900 dark:text-neutral-50"
            id={kebabCase(title)}
          >
            {title}
          </span>
        </h3>
        <p className="transform-gpu rounded-b-2xl bg-gradient-to-br from-teal-200/25 to-emerald-300/50 font-bold text-zinc-900 duration-1000 group-hover:rounded-b-3xl group-hover:rounded-t-xl group-hover:from-teal-50 group-hover:to-emerald-200/75 dark:from-teal-500/25 dark:text-cyan-100 dark:group-hover:from-teal-500/75 dark:group-hover:to-emerald-700/75">
          {description}
        </p>
      </div>
    </div>
  )
}
