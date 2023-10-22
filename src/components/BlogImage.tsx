import React from "react";
import Image from "next/dist/client/image";

type Props = {
    src: string,
    width: number,
    height: number,
    alt: string,
    sub: string
}

export default function BlogImage({src, width, height, alt, sub} : Props) {
    return (
        <div className={"mt-4 flex items-center justify-center flex-col"}>
            <Image src={src} width={width} height={height} alt={alt ?? sub} quality={100}/>
            {
                sub !== undefined &&
                <p className={"outline-text body-large mt-1"}>{sub}</p>
            }
        </div>
    )
}