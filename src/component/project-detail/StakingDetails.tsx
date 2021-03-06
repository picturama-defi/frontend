import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { useState } from "react";
import Loading from "../common/Loading";

const StakingDetails = ({
  imgSrc,
  selectedAddress,
  details: filmDetails,
  ramaBalance,
  ethToUsd,
}: any) => {
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
        <Row2
          ramaBalance={ramaBalance}
          details={filmDetails}
          selectedAddress={selectedAddress}
        />
        <Row3 ethToUsd={ethToUsd} details={filmDetails} />
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
          $ETH
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
        <Text fontSize="15" fontWeight="bold">
          37.5%
        </Text>
        <Text>+</Text>
        <Text fontWeight="bold">10% for early funders</Text>
      </Box>
    </Flex>
  );
};

const Row2 = ({ selectedAddress, details, ramaBalance }: any) => {
  return (
    <Flex pt="5" pb="5" borderTop="1px solid black">
      {selectedAddress ? (
        <>
          <Box w="30%">
            <Text>MY STAKE</Text>
            <Text fontWeight="bold">$ETH</Text>
            <Text fontWeight="bold">{details["userFund"]}</Text>
          </Box>
          <Box w="30%">
            <Text fontWeight="bold">$RAMA BALANCE</Text>
            <Text>
              <br />
            </Text>
            <Text fontWeight="bold">{ramaBalance}</Text>
          </Box>
          <Box w="30%">
            <Text>MY CLAIMABLE REWARDS</Text>
            <Text fontWeight="bold">$RAMA</Text>
            <Text fontWeight="bold">{details["claimableYield"]}</Text>
          </Box>
        </>
      ) : (
        <Text>Connect wallet to add / fund project</Text>
      )}
    </Flex>
  );
};

const Row3 = ({ details, fundProject, ethToUsd }: any) => {
  let percentageFunded = 0;

  if (details) {
    //@ts-ignore
    percentageFunded = (
      (details["amountFundedSoFar"] / details["targetFund"]) *
      100
    ).toFixed(2);
  }

  if (isNaN(percentageFunded)) {
    percentageFunded = 0;
  }

  return (
    <HStack pt="5" pb="5" borderTop="1px solid black">
      <Box w="30%">
        <Box>TVL $ETH</Box>
        <Text fontWeight="bold">
          Target:{" "}
          <Box>
            {details["targetFund"]} ($
            {(ethToUsd * details["targetFund"]).toFixed(2)})
          </Box>
        </Text>
        <Box mt="2">
          <Box>Funded so far</Box>
          <Box>
            {details["amountFundedSoFar"]} ($
            {(ethToUsd * details["amountFundedSoFar"]).toFixed(2)})
          </Box>
        </Box>
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
              (details["amountFundedSoFar"] / details["targetFund"]) * 100 || 0
            }%`}
            height="100%"
            zIndex={1}
          >
            <Box fontWeight="bold" ml="20px" width="200px">
              {percentageFunded}%
            </Box>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};

export default StakingDetails;
