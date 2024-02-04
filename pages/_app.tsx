import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
