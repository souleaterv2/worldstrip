import { Box, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Box as="header" paddingY="6">
      <Img marginX="auto" src="/assets/Logo.svg" alt="logo" />
    </Box>
  );
}
