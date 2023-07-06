import React, { lazy, Suspense } from "react"

const PICTURE_BLOCK = lazy(() => import("./PICTURE_BLOCK"))
const VIDEO_BLOCK = lazy(() => import("./VIDEO_BLOCK"))
const VIDEO_IMG_BLOCK = lazy(() => import("./VIDEO_IMG_BLOCK"))
const SVG_BLOCK = lazy(() => import("./SVG_BLOCK"))

export default function FEATURE_CONTENT({
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
}: any) {
  if (Svg)
    return (
      <Suspense fallback={null}>
        <SVG_BLOCK Svg={Svg} />
      </Suspense>
    )

  if (img_url && !vid_path)
    return (
      <Suspense fallback={null}>
        <PICTURE_BLOCK
          img_url={img_url}
          loading={`${lazy ? "lazy" : "eager"}`}
          alt={alt}
          className={`items-center ${h ? "h-64" : "h-48 w-48"}`}
        />
      </Suspense>
    )
  if (vid_path && !img_url)
    return (
      <Suspense fallback={null}>
        <VIDEO_BLOCK
          title={title}
          src={vid_path}
          poster={poster}
          w={350}
        />
      </Suspense>
    )
  if (img_url && vid_path)
    // yuck, this is refactor-hell but seems necessary since block() gives marginal TBT gains (on low-end mobile)
    // all this bs is to ensure each block is completely deterministic
    return (
      <Suspense fallback={null}>
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
      </Suspense>
    )
  return null
}
