// ========= //
// Image.jsx //
// ========= //

import React from "react";

export default function Image({ src, alt, style, className })
{
    return <img className={className} src={src} alt={alt} style={style} />;
}