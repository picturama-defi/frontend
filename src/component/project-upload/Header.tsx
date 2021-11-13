import { Flex, Button, Center, Box, Heading } from "@chakra-ui/react";
import LogoWithTitle from "../common/LogoWithTitle";
import { useRouter } from "next/dist/client/router";

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
