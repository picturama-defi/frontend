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
    stakingDetails,
    showStakeButton,
    ethToUsd,
  } = props;

  return (
    <>
      <Box bg="brand.yellow" padding="8%" pt="10">
        <StakingDetails
          ethToUsd={ethToUsd}
          ramaBalance={ramaBalance}
          {...props}
        />
        {selectedAddress && (
          <StakingButtons
            fetchFilm={fetchFilm}
            setLoading={setLoading}
            id={id}
            showWithdrawClaimBtn={showWithdrawClaimBtn}
            stakingDetails={stakingDetails}
            showStakeButton={showStakeButton}
          />
        )}
      </Box>
    </>
  );
}

export default StakingInfo;
