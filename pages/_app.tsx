import "@/styles/globals.css";
import "react-chatbot-kit/build/main.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
