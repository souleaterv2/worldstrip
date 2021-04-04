import Head from "next/head";
import {
  SimpleGrid,
  Stack,
  Box,
  Img,
  Text,
  useBreakpointValue,
  HStack,
  Flex,
} from "@chakra-ui/react";



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
      <Box width="100%" minWidth="100vh">
        <Box width="100%" paddingY="6">
          <Img marginX="auto" src="/assets/Logo.svg" alt="logo" />
        </Box>
        <Flex
          alignItems="center"
          width="100%"
          h="335px"
          backgroundSize="cover"
          backgroundImage="url('/assets/banner.jpg')"
        >
          <Flex
            maxWidth={{ base: "100%", lg: "90%" }}
            marginX="auto"
            width="100%"
            textAlign="left"
            justifyContent={{
              base: "center",
              lg: "space-between",
            }}
          >
            <Flex justifyContent="center" flexDirection="column">
              <Box fontSize="2.25rem" fontWeight="500" color="text.500">
                <Text>5 Continentes,</Text>
                <Text>infinitas possibilidades.</Text>
              </Box>
              <Box fontSize="1.25rem" fontWeight="400" color="info.500">
                <Text>Chegou a hora de tirar do papel a viagem que você</Text>
                <Text>sempre sonhou.</Text>
              </Box>
            </Flex>
            {isWideVersion && (
              <Img src="/assets/Airplane.svg" alt="airplane" mb="-90px" />
            )}
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          paddingY="12"
          paddingX="16"
          flexWrap="wrap"
        >
          <Box
            marginY="2"
            flexBasis={{
              base: "50%",
              lg: "auto",
            }}
          >
            <Img
              marginX="auto"
              marginBottom="2"
              src="/assets/cocktail.svg"
              alt="vida noturna"
            />
            <Text textAlign="center" fontWeight="600">
              vida noturna
            </Text>
          </Box>
          <Box
            marginY="2"
            flexBasis={{
              base: "50%",
              lg: "auto",
            }}
          >
            <Img
              marginX="auto"
              marginBottom="2"
              src="/assets/surf.svg"
              alt="praia"
            />
            <Text textAlign="center" fontWeight="600">
              praia
            </Text>
          </Box>
          <Box
            marginY="2"
            flexBasis={{
              base: "50%",
              lg: "auto",
            }}
          >
            <Img
              marginX="auto"
              marginBottom="2"
              src="/assets/building.svg"
              alt="moderno"
            />
            <Text textAlign="center" fontWeight="600">
              moderno
            </Text>
          </Box>
          <Box
            marginY="2"
            flexBasis={{
              base: "50%",
              lg: "auto",
            }}
          >
            <Img
              marginX="auto"
              marginBottom="2"
              src="/assets/museum.svg"
              alt="clássico"
            />
            <Text textAlign="center" fontWeight="600">
              clássico
            </Text>
          </Box>
          <Box
            marginY="2"
            flexBasis={{
              base: "100%",
              lg: "auto",
            }}
          >
            <Img
              marginX="auto"
              marginBottom="2"
              src="/assets/earth.svg"
              alt="e mais..."
            />
            <Text textAlign="center" fontWeight="600">
              e mais...
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
