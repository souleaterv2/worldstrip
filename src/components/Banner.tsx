import { Flex, Box, Text, Img, Center } from "@chakra-ui/react";

interface BannerProps {
  isWideVersion: boolean;
}

export function Banner({ isWideVersion = false }:BannerProps) {
  return (
    <Flex
      width="100%"
      h="368px"
      backgroundSize="cover"
      backgroundPosition='top'
      backgroundRepeat='no-repeat'
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
          <Img src="/assets/Airplane.svg" alt="airplane" mb="-45px" />
        )}
      </Flex>
    </Flex>
  );
}
