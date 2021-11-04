import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { extendedTheme } from "../src/theme";
import Layout from "../src/component/common/Layout";
import "@fontsource/inter/400.css";
import "@fontsource/monda/700.css";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
