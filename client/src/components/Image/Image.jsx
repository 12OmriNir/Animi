// ========= //
// Image.jsx //
// ========= //

import React from 'react'

export default function Image({ image })
{
    const { alt, src, style } = image;
    return <img alt={alt} src={src} style={style} />
}