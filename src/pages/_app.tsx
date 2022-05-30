import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import SimpleSidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SimpleSidebar>
        <Component {...pageProps} />
      </SimpleSidebar>
    </ChakraProvider>
  );
}

export default MyApp;
