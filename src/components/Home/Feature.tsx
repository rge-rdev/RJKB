/**
 * Copyright(c) Roger Jiang
 */

import React, { useEffect, useRef, useState, useMemo } from "react"
import Video from "../Video"
import kebabCase from "lodash/kebabCase"
import { block } from "million/react"

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

const VIDEO_BLOCK = block(({ title, src: vid_path, poster }) => (
  <Video
    title={title}
    src={vid_path}
    poster={poster}
    w={350}
    className="max-w-full"
  />
))

const PICTURE_BLOCK = block(({ img_url, loading, alt, className }) => (
  <picture>
    <source
      srcSet={img_url[0]}
      type="image/avif"
    />
    <img
      loading={loading}
      alt={alt}
      src={img_url[1]}
      className={className}
    />
  </picture>
))

const VIDEO_IMG_BLOCK = block(
  ({
    alt,
    class_picture,
    title,
    vid_src,
    img_src,
    srcSet,
    poster,
    w,
    pic_inline_css_w,
    pic_inline_css_h,
    vid_css,
    vid_inline_css_w,
    vid_inline_css_h,
    loading,
  }: any) => (
    <div
      className="block"
      style={{ height: "260px", width: "366px" }}
    >
      <div
        className={class_picture}
        style={{
          width: pic_inline_css_w,
          height: pic_inline_css_h,
          verticalAlign: "top",
        }}
      >
        <picture>
          <source
            srcSet={srcSet}
            type="image/avif"
          />
          <img
            loading={loading}
            alt={alt}
            src={img_src}
            className="h-36 w-36 items-center"
          />
        </picture>
      </div>
      <div
        className={vid_css}
        style={{
          width: vid_inline_css_w,
          height: vid_inline_css_h,
        }}
      >
        <Video
          title={title}
          src={vid_src}
          poster={poster}
          w={w}
          className="max-w-full"
        />
      </div>
    </div>
  )
)

function FEATURE_CONTENT({
  title,
  SVG: Svg,
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
  if (Svg) return <SVG_BLOCK Svg={Svg} />
  if (img_url && !vid_path)
    return (
      <PICTURE_BLOCK
        img_url={img_url}
        loading={`${lazy ? "lazy" : "eager"}`}
        alt={alt}
        className={`items-center ${h ? "h-64" : "h-48 w-48"}`}
      />
    )
  if (vid_path && !img_url)
    return (
      <VIDEO_BLOCK
        title={title}
        src={vid_path}
        poster={poster}
        w={350}
      />
    )
  if (img_url && vid_path)
    // yuck, this is refactor-hell but seems necessary since block() gives marginal TBT gains (on low-end mobile)
    // all this bs is to ensure each block is completely deterministic
    return (
      <>
        <VIDEO_IMG_BLOCK
          class_picture={`${inline ? "inline-flex " : ""}text-center`}
          title={title}
          img_src={img_url[1]}
          vid_src={vid_path}
          poster={poster}
          loading={`${lazy ? "lazy" : "eager"}`}
          w={w || 350}
          pic_inline_css_w={`${inline ? "144px" : "366px"}`}
          pic_inline_css_h={`${inline ? "260px" : "144px"}`}
          vid_css={`${inline ? "inline-flex " : ""}text-center px-2`}
          vid_inline_css_w={`${w || (h && "132")}px`}
          vid_inline_css_h={`${h ? h + "px" : "auto"}`}
        />
      </>
    )
  return null
}

function FEATURE_DESCRIPTION({
  title,
  description,
}: {
  title: string
  description?: any
}) {
  return (
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
  )
}

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
        <FEATURE_CONTENT
          title={title}
          SVG={Svg}
          img_url={img_url}
          alt={alt}
          vid_path={vid_path}
          poster={poster}
          inline={inline}
          w={w}
          h={h}
          lazy={lazy}
          i={i}
        />
      </div>
      <FEATURE_DESCRIPTION
        title={title}
        description={description}
      />
    </div>
  )
}
