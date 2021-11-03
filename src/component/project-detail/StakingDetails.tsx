import { Box, Flex, HStack } from "@chakra-ui/react";

function StakingDetails() {
  return (
    <Box bg="brand.yellow" padding="10%" pt="10">
      <Flex borderTop="5px solid black" borderBottom="5px solid black">
        <Box p="5" flex="1">
          Hello
        </Box>
        <Box flex="5">
          <HStack pt="5" pb="5">
            <Box w="30%">Hello</Box>
            <Box w="30%">Hello</Box>
            <Box w="30%">Hello</Box>
          </HStack>
          <HStack pt="5" pb="5" borderTop="1px solid black">
            <Box w="30%">Hello</Box>
            <Box w="30%">Hello</Box>
            <Box w="30%">Hello</Box>
          </HStack>
          <HStack pt="5" pb="5" borderTop="1px solid black">
            <Box w="30%">Hello</Box>
            <Box w="30%">Hello</Box>
            <Box w="30%">Hello</Box>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default StakingDetails;
