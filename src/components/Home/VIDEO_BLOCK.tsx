import React from "react"
import { block } from "million/react"
import Video from "../Video"

export default block(({ title, src: vid_path, poster }) => (
  <Video
    title={title}
    src={vid_path}
    poster={poster}
    w={350}
    className="max-w-full"
  />
))
