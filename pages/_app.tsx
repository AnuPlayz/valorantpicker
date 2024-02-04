import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ui/theme-provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
