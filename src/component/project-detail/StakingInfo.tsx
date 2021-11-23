import { Box } from "@chakra-ui/react";
import StakingButtons from "./StakingButtons";
import StakingDetails from "./StakingDetails";

function StakingInfo(props: any) {
  return (
    <>
      <Box bg="brand.yellow" padding="8%" pt="10">
        <StakingDetails {...props} />
        <StakingButtons />
      </Box>
    </>
  );
}

export default StakingInfo;
