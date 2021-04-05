import Head from "next/head";
import { GetStaticProps } from "next";
import { Divider, Box, Text, useBreakpointValue, Flex } from "@chakra-ui/react";

import { jsonSeverApi } from "../services/api";

import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { TravelType } from "../components/TravelType";

type Travel = {
  id: number;
  name: string;
  image: string;
  flex: {
    base: string;
    lg: string;
  };
};

type CarouselContent = {
  id: number;
  name: string;
  image: string;
  coment: string;
};

interface HomeProps {
  configHome: {
    travelData: Travel[];
    carouselData: CarouselContent[];
  };
}

export default function Home({ configHome }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title> Home </title>
      </Head>
      <Banner isWideVersion={isWideVersion} />
      <Box as="main" paddingX={{ base: "0", lg: "20" }} marginBottom="6">
        <Flex
          as="section"
          justifyContent="space-between"
          paddingY="12"
          flexWrap="wrap"
          paddingX="10"
        >
          {configHome.travelData.map((travelItem) => (
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
        <Carousel carouselItens={configHome.carouselData} />
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const travelData = (await jsonSeverApi.get("travel")).data;
  const carouselData = (await jsonSeverApi.get("carousel")).data;

  return {
    props: {
      configHome: {},
    },
  };
};
