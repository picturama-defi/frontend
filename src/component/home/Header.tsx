import { Flex, Button, Center, Box, Heading } from "@chakra-ui/react";
import LogoWithTitle from "../common/LogoWithTitle";

const Header = () => {
  return (
    <>
      <style>{style}</style>
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
          <Box
            className="mission-statement"
            fontFamily="fonts.heading"
            fontWeight="bold"
            textAlign="center"
            width="60%"
          >
            FINANCING INDEPENDENT CINEMA
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
