import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      500: "#ffba08",
    },
    info: {
      500: "#dadada",
    },
    text: {
      500: "#f5f8fa",
    },
    darkText: {
      500: "#47585b",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "text.500",
        color: "darkText.500",
      },
    },
  },
});
