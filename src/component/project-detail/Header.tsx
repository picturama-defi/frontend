import {
  Flex,
  Button,
  Center,
  Box,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import LogoWithTitle from "../common/LogoWithTitle";

const Header = (props: any) => {
  const { details } = props;

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
            <Button variant="brand">CONNECT WALLET</Button>
            <Button ml="2" variant="brand">
              MENU
            </Button>
          </Center>
        </Flex>
        <Center>
          <VStack>
            <Text fontWeight="bold">PROJECT</Text>
            <Heading size="2xl">{details?.title.toUpperCase()}</Heading>
          </VStack>
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
