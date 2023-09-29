import type { AppProps } from "next/app";
import React from "react";

if (typeof window === "undefined") React.useLayoutEffect = () => null;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
