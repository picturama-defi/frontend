import { Box } from "@chakra-ui/react";
import StakingButtons from "./StakingButtons";
import StakingDetails from "./StakingDetails";

function StakingInfo(props: any) {
  const {
    selectedAddress,
    id,
    setLoading,
    fetchFilm,
    ramaBalance,
    showWithdrawClaimBtn,
  } = props;

  return (
    <>
      <Box bg="brand.yellow" padding="8%" pt="10">
        <StakingDetails ramaBalance={ramaBalance} {...props} />
        {selectedAddress && (
          <StakingButtons
            fetchFilm={fetchFilm}
            setLoading={setLoading}
            id={id}
            showWithdrawClaimBtn={showWithdrawClaimBtn}
          />
        )}
      </Box>
    </>
  );
}

export default StakingInfo;
