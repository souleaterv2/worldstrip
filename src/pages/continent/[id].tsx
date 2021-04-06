import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { Flex, Text, Box, Grid, Img, SimpleGrid } from "@chakra-ui/react";
import { jsonSeverApi } from "../../services/api";

type Country = {
  id: number;
  city: string;
  country: string;
  img: string;
  flag: string;
};

type Continent = {
  id: number;
  banner: string;
  name: string;
  description: string;
  countrysAmmount: number;
  languagesAmmount: number;
  citysAmmount: number;
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
        color="text.500"
        alignItems={{
          base: "center",
          md: "flex-end",
        }}
        justifyContent={{
          base: "center",
          md: "flex-start",
        }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage={`url(${continentData.banner})`}
        h={{
          base: "150px",
          md: "400px",
          lg: "500px",
        }}
        paddingBottom={{
          base: "2.5rem",
          lg: "4.375rem",
        }}
        paddingLeft={{
          base: "5",
          md: "3rem",
          lg: "8.75rem",
        }}
      >
        <Text
          fontWeight="600"
          fontSize={{
            base: "1.75rem",
            lg: "3rem",
          }}
        >
          {continentData.name}
        </Text>
      </Flex>

      <Box
        as="main"
        paddingX={{
          base: "5",
          md: "3rem",
          lg: "8.75rem",
        }}
        paddingBottom="6"
      >
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gridTemplateRows={{
            base: "1fr 1fr",
            md: "1fr",
          }}
          gap={{
            base: "1rem",
            md: "2.5rem",
            lg: "4.375rem",
          }}
          paddingY={{
            base: "5",
            md: "3rem",
            lg: "5rem",
          }}
        >
          <Text
            fontWeight="400"
            flexBasis={{
              base: "100%",
              lg: "50%",
            }}
            fontSize={{
              base: "0.875rem",
              lg: "1.5rem",
            }}
            textAlign="justify"
          >
            {continentData.description}
          </Text>

          <Flex
            justifyItems="center"
            color="darkText.500"
            fontWeight="600"
            flexWrap='wrap'
            justifyContent="space-between"
            flexBasis={{
              base: "100%",
              lg: "50%",
            }}
            textAlign="center"
          >
            <Box alignSelf="center">
              <Text
                fontSize={{
                  base: "1.5rem",
                  lg: "3rem",
                }}
                color="highlight.500"
              >
                {continentData.countrysAmmount}
              </Text>
              <Text
                fontSize={{
                  base: "1.125rem",
                  lg: "1.5rem",
                }}
              >
                países
              </Text>
            </Box>

            <Box alignSelf="center">
              <Text
                fontSize={{
                  base: "1.5rem",
                  lg: "3rem",
                }}
                color="highlight.500"
              >
                {continentData.languagesAmmount}
              </Text>
              <Text
                fontSize={{
                  base: "1.125rem",
                  lg: "1.5rem",
                }}
              >
                línguas
              </Text>
            </Box>

            <Box alignSelf="center">
              <Text
                fontSize={{
                  base: "1.5rem",
                  lg: "3rem",
                }}
                color="highlight.500"
              >
                {continentData.citysAmmount}
              </Text>
              <Text
                fontSize={{
                  base: "1.125rem",
                  lg: "1.5rem",
                }}
              >
                cidades +100
              </Text>
            </Box>
          </Flex>
        </Grid>

        <Text
          fontWeight="500"
          fontSize={{
            base: "1.5rem",
            md: "2rem",
            lg: "2.25rem",
          }}
          paddingBottom={{
            base: "1.25rem",
            md: "2rem",
            lg: "2.5rem",
          }}
        >
          Cidades +100
        </Text>

        <SimpleGrid minChildWidth="16rem" gap="6">
          {continentData.top10.map((item) => (
            <Box w="100%" height="17.5rem" key={item.id}>
              <Img w="100%" src={item.img} alt={item.city} h="10.875rem" />
              <Flex
                padding="6"
                justifyItems="center"
                justifyContent="space-between"
                border="1px solid #ffba08"
                borderTop={0}
              >
                <Box>
                  <Text fontWeight='600' fontSize='1.25rem' >{item.city}</Text>
                  <Text fontWeight='500' fontSize='1rem'color='#999999' >{item.country}</Text>
                </Box>
                <Img
                  h="1.875rem"
                  w="1.875rem"
                  borderRadius="full"
                  src={item.flag}
                  alt={item.city}
                />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  console.log(id);

  const continent = (await jsonSeverApi.get<Continent>(`/continents/${id}`))
    .data;

  return {
    props: {
      continentData: {
        ...continent,
      },
    },
  };
};
