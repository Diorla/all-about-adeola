import type { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "styled-components";
import palette from "../theme/palette";
import timing from "../theme/timing";
import breakpoints from "../theme/breakpoints";
import elevation from "../theme/elevation";
import priority from "../theme/priority";

const theme = {
  breakpoints,
  elevation,
  palette,
  priority,
  timing,
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
