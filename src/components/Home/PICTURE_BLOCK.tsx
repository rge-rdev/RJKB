import React from "react"
import { block } from "million/react"

export default block(({ img_url, loading, alt, className }) => (
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
