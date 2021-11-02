const pink = "#EA3EF7";
const yellow = "#FAFF00";

const colors = {
  brand: {
    pink,
    yellow,
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
          color: "white",
        },
      },
      brand3: {
        bg: "yellow",
        color: "black",
        fontSize: "10px",
        borderRadius: "20px",
        _hover: {
          bg: pink,
          color: "white",
        },
      },
    },
  },
};

export const extendedTheme = { colors, components };
