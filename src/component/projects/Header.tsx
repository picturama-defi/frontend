import { Flex, Button, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ConnectWallet from "../common/ConnectWallet";
import LogoWithTitle from "../common/LogoWithTitle";

const Header = () => {
  const router = useRouter();

  const goToProjectUpload = () => {
    router.push("project-upload");
  };

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
            <Button onClick={goToProjectUpload} variant="brand2" mr="5">
              ADD PROJECT
            </Button>
            <ConnectWallet variant="brand2" />
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
