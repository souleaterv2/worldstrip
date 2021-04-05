import Head from "next/head";
import {
  Stack,
  Divider,
  Box,
  Img,
  Text,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { TravelType } from "../components/TravelType";

import { homeConfig } from "../config/home";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title> Home </title>
      </Head>
      <Stack minWidth="100vh" marginY="6">
        <Box as='header' paddingBottom="6">
          <Img marginX="auto" src="/assets/Logo.svg" alt="logo" />
        </Box>
        <Banner isWideVersion={isWideVersion} />
        <Box as="main" paddingX={{ base: "0", lg: "20" }}>
          <Flex
            as="section"
            justifyContent="space-between"
            paddingY="12"
            flexWrap="wrap"
            paddingX='10'
          >
            {homeConfig.travelTypeSection.map((travelItem) => (
              <TravelType
                key={travelItem.name}
                image={travelItem.image}
                name={travelItem.name}
                isWideVersion={isWideVersion}
                flexBasis={travelItem.flex}
              />
            ))}
          </Flex>
          <Flex justifyContent="center">
            <Divider
              orientation="horizontal"
              backgroundColor="darkText.500"
              height="2px"
              width="90px"
            />
          </Flex>
          <Flex
            as="section"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            color="darkText.500"
            fontWeight="500"
            fontSize={{
              base: "1.25rem",
              lg: "2.25rem",
            }}
            paddingY="10"
          >
            <Text>Vamos nessa ?</Text>
            <Text>Então escolha seu continente</Text>
          </Flex>
          <Carousel carouselItens={homeConfig.carousel} />
        </Box>
      </Stack>
    </>
  );
}
