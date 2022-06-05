import { Box, Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Center>
        <Text fontSize={"4xl"} fontFamily="mono">
          풍산고등학교 정보 홈페이지
        </Text>
      </Center>
    </>
  );
};

export default Home;
