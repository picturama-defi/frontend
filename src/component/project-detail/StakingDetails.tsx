import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const StakingDetails = ({ imgSrc }: any) => {
  console.log(imgSrc);

  return (
    <Flex borderTop="5px solid black" borderBottom="5px solid black">
      <Box p="5" flex="2">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img alt="preview image of the project" src={imgSrc}></img>
      </Box>
      <Box flex="5">
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
    </Flex>
  );
};

const Row1 = () => {
  return (
    <Flex pt="5" pb="5">
      <Box w="30%">
        <Text position="relative" top="0">
          STAKE
        </Text>
        <Text position="relative" top="0" fontWeight="bold">
          $NEXT
        </Text>
        <Text position="relative" top="0" fontWeight="bold">
          100000000
        </Text>
      </Box>
      <Box w="30%">
        <Text>EARN</Text>
        <Text fontWeight="bold">$RAMA</Text>
        <Text fontWeight="bold">100000000</Text>
      </Box>
      <Box w="30%">
        <Text>EST.APY</Text>
        <Text fontWeight="bold">37.3%</Text>
      </Box>
    </Flex>
  );
};

const Row2 = () => {
  return (
    <Flex pt="5" pb="5" borderTop="1px solid black">
      <Box w="30%">
        <Text>MY STAKE</Text>
        <Text fontWeight="bold">$NEXT</Text>
        <Text fontWeight="bold">10000</Text>
      </Box>
      <Box w="30%">
        <Text>REWARDS UPDATE</Text>
        <Text fontWeight="bold">6H 28M</Text>
      </Box>
      <Box w="30%">
        <Text>MY CLAIMABLE REWARDS</Text>
        <Text fontWeight="bold">$RAMA</Text>
        <Text fontWeight="bold">100000000</Text>
      </Box>
    </Flex>
  );
};

const Row3 = () => {
  return (
    <HStack pt="5" pb="5" borderTop="1px solid black">
      <Box w="30%">
        <Box>TVL</Box>
        <Text fontWeight="bold">$ALGO</Text>
        <Text fontWeight="bold">111,979,625</Text>
        <Box>$1,740.163</Box>
      </Box>
      <Box w="70%">
        <Box
          border="2px solid black"
          bg="brand.yellow"
          width="100%"
          height="30px"
          zIndex={2}
        >
          <Box
            borderRight="2px solid black"
            bg="brand.pink"
            width="75%"
            height="100%"
            zIndex={1}
          >
            <Box fontWeight="bold" ml="20px" width="200px">
              75% FUNDED
            </Box>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};

export default StakingDetails;
