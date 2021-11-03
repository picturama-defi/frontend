import React from "react";
import Ticker from "react-ticker";
import { Heading, Box } from "@chakra-ui/react";

const MoveText = (props: any) => {
  const { text } = props;

  return (
    <Box bg="brand.yellow">
      <Ticker offset={100}>
        {() => (
          <>
            <Heading
              whiteSpace="break-spaces"
              p="5"
              fontSize="7xl"
              color="black"
            >
              {`${text}         `}
            </Heading>
          </>
        )}
      </Ticker>
    </Box>
  );
};

export default MoveText;
