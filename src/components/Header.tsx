import Link from "next/link";
import { Box, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Box as="header" paddingY="6">
      <Link href="/">
        <a>
          <Img marginX="auto" src="/assets/Logo.svg" alt="logo" />
        </a>
      </Link>
    </Box>
  );
}
