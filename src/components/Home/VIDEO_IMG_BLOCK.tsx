import React from "react"
import { block } from "million/react"
import Video from "../Video"

export default block(
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
  }) => (
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
