import { Box, Img, Text, BoxProps } from "@chakra-ui/react";

interface TravelType extends BoxProps {
  isWideVersion: boolean;
  image: string;
  name: string;
}

export function TravelType({
  isWideVersion = false,
  image,
  name,
  ...rest
}: TravelType) {
  return (
    <Box marginY="2" {...rest}>
      {isWideVersion && (
        <Img marginX="auto" marginBottom="2" src={image} alt={name} />
      )}

      <Text
        textAlign="center"
        fontWeight="600"
        fontSize={{
          base: "18px",
          lg: "24px",
        }}
      >
        {!isWideVersion && (
          <Box
            as="span"
            display="inline-block"
            borderRadius="full"
            bgColor="highlight.500"
            h="8px"
            w="8px"
            marginRight="2"
          />
        )}
        {name}
      </Text>
    </Box>
  );
}
