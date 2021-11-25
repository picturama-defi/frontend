import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { getFilmData } from "../../API/contract.ts/main";
import { useState } from "react";
import Loading from "../common/Loading";

const StakingDetails = ({ imgSrc, selectedAddress, id }: any) => {
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    getFilmData(id).then((res: any) => {
      setFilmDetails(res);
    });
  }, [id]);

  if (!filmDetails) {
    return <Loading color="yellow" emptyColor="black" />;
  }

  return (
    <Flex borderTop="5px solid black" borderBottom="5px solid black">
      <Box p="5" flex="2">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img alt="preview image of the project" src={imgSrc}></img>
      </Box>
      <Box flex="5">
        <Row1 />
        <Row2 details={filmDetails} selectedAddress={selectedAddress} />
        <Row3 details={filmDetails} />
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
          $MATIC
        </Text>
        <Text position="relative" top="0" fontWeight="bold">
          1
        </Text>
      </Box>
      <Box w="30%">
        <Text>EARN</Text>
        <Text fontWeight="bold">$RAMA</Text>
        <Text fontWeight="bold">1</Text>
      </Box>
      <Box w="30%">
        <Text>EST.APY</Text>
        <Text fontWeight="bold">37.3%</Text>
      </Box>
    </Flex>
  );
};

const Row2 = ({ selectedAddress, details }: any) => {
  return (
    <Flex pt="5" pb="5" borderTop="1px solid black">
      {selectedAddress ? (
        <>
          <Box w="30%">
            <Text>MY STAKE</Text>
            <Text fontWeight="bold">$MATIC</Text>
            <Text fontWeight="bold">{details["userFund"]}</Text>
          </Box>
          <Box w="30%">
            <Text>REWARDS UPDATE</Text>
            <Text fontWeight="bold">6H 28M</Text>
          </Box>
          <Box w="30%">
            <Text>MY CLAIMABLE REWARDS</Text>
            <Text fontWeight="bold">$RAMA</Text>
            <Text fontWeight="bold">{details["yieldGenerated"]}</Text>
          </Box>
        </>
      ) : (
        <Text>Connect wallet to start staking</Text>
      )}
    </Flex>
  );
};

const Row3 = ({ details }: any) => {
  return (
    <HStack pt="5" pb="5" borderTop="1px solid black">
      <Box w="30%">
        <Box>TVL</Box>
        <Text fontWeight="bold">$MATIC</Text>
        <Text fontWeight="bold">Target: {details["targetFund"]}</Text>
        <Box>Funded so far: {details["amountFundedSoFar"]}</Box>
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
            width={`${
              (details["amountFundedSoFar"] / details["targetFund"]) * 100
            }`}
            height="100%"
            zIndex={1}
          >
            <Box fontWeight="bold" ml="20px" width="200px">
              {(details["amountFundedSoFar"] / details["targetFund"]) * 100}%
            </Box>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};

export default StakingDetails;
