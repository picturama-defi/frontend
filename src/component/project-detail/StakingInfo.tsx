import { Box } from "@chakra-ui/react";
import StakingButtons from "./StakingButtons";
import StakingDetails from "./StakingDetails";

function StakingInfo(props: any) {
  const { selectedAddress } = props;

  return (
    <>
      <Box bg="brand.yellow" padding="8%" pt="10">
        <StakingDetails {...props} />
        {selectedAddress && <StakingButtons />}
      </Box>
    </>
  );
}

export default StakingInfo;
