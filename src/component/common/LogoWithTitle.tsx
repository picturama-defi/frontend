import { HStack, Box } from "@chakra-ui/react";
import Image from "next/image";
import LogoImage from "../../../public/logo.svg";

const LogoWithTitle = () => {
  return (
    <>
      <HStack>
        <Image
          alt="Logo of picturama that is a yellow smiling face"
          src={LogoImage}
          width="50px"
          height="50px"
        />
        <Box fontWeight="bold">$RAMA</Box>
      </HStack>
    </>
  );
};

export default LogoWithTitle;
