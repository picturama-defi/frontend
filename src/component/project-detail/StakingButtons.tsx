import { Button, Flex } from "@chakra-ui/react";

function StakingButtons() {
  return (
    <Flex justifyContent="space-around" p="5" flexDirection="row">
      <Button width="20%" variant="brand2">
        STAKE
      </Button>
      <Button width="20%" ml="2" variant="brand2">
        WITHDRAW
      </Button>
      <Button width="20%" ml="2" variant="brand2">
        CLAIM
      </Button>
    </Flex>
  );
}

export default StakingButtons;
