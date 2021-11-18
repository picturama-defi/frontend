import { extendTheme } from "@chakra-ui/react";

const pink = "#EA3EF7";
const yellow = "#FAFF00";

const colors = {
  brand: {
    pink,
    yellow,
  },
};

const fonts = {
  fonts: {
    heading: "Monda",
    body: "Inter",
  },
};
const components = {
  Button: {
    variants: {
      brand: {
        bg: "black",
        color: yellow,
        fontSize: "10px",
        borderRadius: "20px",
        _hover: {
          bg: yellow,
          color: "black",
        },
      },
      brand2: {
        bg: "black",
        color: yellow,
        fontSize: "10px",
        borderRadius: "20px",
        _hover: {
          bg: pink,
          color: "black",
        },
      },
      brand3: {
        bg: "yellow",
        color: "black",
        fontSize: "10px",
        borderRadius: "20px",
        _hover: {
          bg: pink,
          color: "black",
        },
      },
      black: {
        bg: "black",
        color: "brand.yellow",
        fontSize: "10px",
        borderRadius: "20px",
      },
    },
  },
  Input: {
    variants: {
      brand: {
        field: {
          border: "1px solid",
          borderColor: "black",
          color: "black",
          bg: "brand.yellow",
          _focus: {
            borderColor: "black",
          },
          _hover: {
            borderColor: "black",
          },
          _placeholder: {
            color: "#666",
          },
        },
      },
      brand2: {
        field: {
          border: "1px solid",
          borderColor: "black",
          color: "black",
          bg: "brand.yellow",
          _focus: {
            borderColor: "black",
          },
          _hover: {
            borderColor: "black",
          },
          _placeholder: {
            color: "#666",
          },
        },
      },
    },
  },
};

export const extendedTheme = extendTheme({ colors, components, fonts });
