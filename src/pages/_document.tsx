import Document from "next/document";
import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang={"en"}>
                <Head>
                    <link rel="icon" href="https://placekitten.com/32/32"
                          sizes="32x32"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
                          rel="stylesheet"/>
                </Head>
                <body className={"bg-[--md-sys-color-surface]"}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}