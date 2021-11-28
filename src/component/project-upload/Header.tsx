import { Flex, Button, Center, Box, Heading } from "@chakra-ui/react";
import LogoWithTitle from "../common/LogoWithTitle";
import { useRouter } from "next/dist/client/router";

import { ArrowLeftIcon } from "@chakra-ui/icons";

import ConnectWallet from "../common/ConnectWallet";
const Header = () => {
  const router = useRouter();

  const handleClick = () => {
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
          <ConnectWallet variant="brand" />
        </Flex>
        <Center>
          <Box
            className="mission-statement"
            fontFamily="fonts.heading"
            fontWeight="bold"
            textAlign="center"
            width="60%"
          >
            UPLOAD PROJECT
          </Box>
        </Center>
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
