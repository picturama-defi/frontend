import { Flex, Button, Center, Box } from "@chakra-ui/react";
import LogoWithTitle from "./LogoWithTitle";

const Header = () => {
  return (
    <Box pb="10" bg="brand.pink">
      <Flex
        pl="5"
        pt="5"
        pr="5"
        bg="brand.pink"
        w="100%"
        justifyContent="space-between"
      >
        <LogoWithTitle />
        <Center>
          <Button variant="brand">LAUNCH APP</Button>
        </Center>
      </Flex>
      <Center>
        <Box fontWeight="bold" textAlign="center" width="50%" fontSize="40">
          STATEMENT ABOUT WHAT IS THE MISSION OF THIS SITE
        </Box>
      </Center>
    </Box>
  );
};

export default Header;
