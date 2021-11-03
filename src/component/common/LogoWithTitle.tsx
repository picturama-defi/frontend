import { HStack, Box } from "@chakra-ui/react";

const LogoWithTitle = () => {
  return (
    <>
      <HStack>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          alt="Logo of picturama that is a yellow smiling face"
          src={"logo.svg"}
          width="50px"
          height="50px"
        />
        <Box fontWeight="bold">$RAMA</Box>
      </HStack>
    </>
  );
};

export default LogoWithTitle;
