const colors = {
  brand: {
    pink: "#EA3EF7",
  },
};

const components = {
  Button: {
    variants: {
      brand: {
        bg: "black",
        color: "#FAFF00",
        fontSize: "10px",
        borderRadius: "20px",
        _hover: {
          bg: "#FAFF00",
          color: "black",
        },
      },
    },
  },
};

export const extendedTheme = { colors, components };
