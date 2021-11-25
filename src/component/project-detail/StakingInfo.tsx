import { Box } from "@chakra-ui/react";
import StakingButtons from "./StakingButtons";
import StakingDetails from "./StakingDetails";

function StakingInfo(props: any) {
  const { selectedAddress, id, setLoading } = props;

  return (
    <>
      <Box bg="brand.yellow" padding="8%" pt="10">
        <StakingDetails {...props} />
        {selectedAddress && (
          <StakingButtons fetch={fetch} setLoading={setLoading} id={id} />
        )}
      </Box>
    </>
  );
}

export default StakingInfo;
