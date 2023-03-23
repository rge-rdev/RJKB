import React from "react"

export default function Video({
  src,
  h,
  w,
  title,
}: {
  src: string
  w?: number
  h?: number
  title?: string
}) {
  return (
    <video
      className="rounded-md"
      title={title}
      height={h}
      width={h ? undefined : w || 500}
      autoPlay
      loop
      muted
      preload="auto"
    >
      <source
        src={src}
        type="video/mp4"
      />
    </video>
  )
}
