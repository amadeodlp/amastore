import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
