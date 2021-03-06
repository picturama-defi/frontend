import {
  Flex,
  Button,
  Center,
  Box,
  Text,
  Heading,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import ConnectWallet from "../common/ConnectWallet";
import LogoWithTitle from "../common/LogoWithTitle";

const Header = (props: any) => {
  const { details } = props;

  const router = useRouter();

  const goToProjects = () => {
    router.push("/projects");
  };

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
            <ConnectWallet variant="brand" />
            <Button onClick={goToProjects} ml="2" variant="brand">
              MENU
            </Button>
          </Center>
        </Flex>
        <Flex width="100%" justifyContent="space-evenly">
          <Center>
            <VStack>
              <Text fontWeight="bold">PROJECT</Text>
              <Heading size="2xl">{details?.title.toUpperCase()}</Heading>
            </VStack>
          </Center>
        </Flex>
        <Box>
          <Button
            position="absolute"
            top="10"
            ml="20"
            mt="20"
            onClick={() => router.back()}
            leftIcon={<ArrowLeftIcon />}
            colorScheme="teal"
            variant="brand"
          >
            Back
          </Button>
        </Box>
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
