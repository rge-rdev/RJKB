import React from "react"

export default function Video({
  src,
  poster,
  h,
  w,
  title,
  className,
}: {
  src: string
  poster?: string
  w?: number
  h?: number
  title?: string
  className?: string
}) {
  return (
    <video
      className={className ? "rounded-md " + className : "rounded-md"}
      title={title}
      poster={poster}
      height={h}
      width={h ? undefined : w || 500}
      autoPlay
      loop
      muted // all screen caps won't have sound anyway - but just future proof
      preload="none"
    >
      <source
        src={src}
        type="video/mp4"
      />
    </video>
  )
}
