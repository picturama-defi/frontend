import { Box } from "@chakra-ui/react";

const Layout = (props: any) => {
  return (
    <Box bg="white" width="100vw">
      <Box margin="auto" width="80%">
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
