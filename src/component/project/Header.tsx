import { Flex, Button, Center, Box } from "@chakra-ui/react";
import LogoWithTitle from "../LogoWithTitle";

const Header = () => {
  return (
    <>
      <style>{style}</style>
      <Box pb="10" bg="brand.yellow">
        <Flex
          pl="5"
          pt="5"
          pr="5"
          bg="brand.yellow"
          w="100%"
          justifyContent="space-between"
        >
          <LogoWithTitle />
          <Center>
            <Button variant="brand2">CONNECT WALLET</Button>
            <Button ml="2" variant="brand2">
              MENU
            </Button>
          </Center>
        </Flex>
        <Center>
          <Box
            className="mission-statement"
            fontWeight="bold"
            textAlign="center"
            width="60%"
          >
            $RAMA PROJECTS
          </Box>
        </Center>
      </Box>
    </>
  );
};

const style = `
  .mission-statement {
    font-size: 3vw;
  }
`;

export default Header;