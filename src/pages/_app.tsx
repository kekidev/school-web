import type { AppProps } from "next/app";
import { Alert, AlertIcon, ChakraProvider } from "@chakra-ui/react";
import SimpleSidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SimpleSidebar>
        <Alert status="info">
          <AlertIcon />본 사이트는 풍산고등학교 재학생 1학년 6반 배재환 학생이
          제작하였습니다.
        </Alert>
        <Component {...pageProps} />
      </SimpleSidebar>
    </ChakraProvider>
  );
}

export default MyApp;
