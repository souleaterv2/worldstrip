import Head from "next/head";
import { GetStaticProps } from "next";
import { Flex, Text, Box } from "@chakra-ui/react";
import { jsonSeverApi } from "../../services/api";

type Country = {
  city: string;
  country: string;
  flag: string;
};

type Continent = {
  id: number;
  banner: string;
  name: string;
  description: string;
  countryAmmount: string;
  languagesAmmount: string;
  cityAmmount: string;
  top10: Country[];
};

interface ContinentProps {
  continentData: Continent;
}

export default function Continent({ continentData }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continentData.name}</title>
      </Head>
      <Flex
        as="section"
        backgroundColor={`url(${continentData.banner})`}
        h="500px"
      >
        <Text fontWeight="600" fontSize="3rem">
          {continentData.name}
        </Text>
      </Flex>
      <Flex minHeight="211px" as="section">
        <Text
          flexBasis={{
            base: "100%",
            lg: "50%",
          }}
          textAlign="justify"
        >
          {continentData.description}
        </Text>
        <Flex
          color="darkText.500"
          fontWeight="600"
          flexBasis={{
            base: "100%",
            lg: "50%",
          }}
          textAlign="center"
        >
          <Box>
            <Text fontSize="3rem" color="highlight.500">
              {continentData.countryAmmount}
            </Text>
            <Text fontSize="1.5rem">países</Text>
          </Box>
          <Box>
            <Text fontSize="3rem" color="highlight.500">
              {continentData.languagesAmmount}
            </Text>
            <Text fontSize="1.5rem">línguas</Text>
          </Box>
          <Box>
            <Text fontSize="3rem" color="highlight.500">
              {continentData.cityAmmount}
            </Text>
            <Text fontSize="1.5rem">cidades +100</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export const getStacProps: GetStaticProps = async ({ params }) => {
  const { continetID } = params;

  const continent = (await jsonSeverApi.get<Continent>(`${continetID}`)).data;

  return {
    props: {
      continentData: {
        ...continent,
      },
    },
  };
};
