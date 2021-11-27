import { Button, Flex } from "@chakra-ui/react";
import { fundProject, claim, withdraw } from "../../API/contract/main";
import React, { useState } from "react";
import BasicModal from "../common/BasicModal";

function StakingButtons({
  id,
  setLoading,
  fetchFilm,
  showWithdrawClaimBtn,
}: any) {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showStakeModal, setShowStakeModal] = useState(false);
  const [stakeAmount, setStakeAmount] = useState(0);

  const onConfirmWithdraw = async () => {
    setLoading(true);
    await withdraw(id);
    setLoading(false);
    fetchFilm();
  };

  const closeWithDrawModal = () => {
    setShowWithdrawModal(false);
  };

  const handleWithdrawClick = async () => {
    setShowWithdrawModal(true);
  };

  const onConfirmStake = async () => {
    setLoading(true);
    const res = await fundProject(id, stakeAmount);
    if (!res) alert("Transaction failed!");
    setLoading(false);
    fetchFilm();
  };

  const closeStakeModal = () => {
    setStakeAmount(0);
    setShowStakeModal(false);
  };

  const handleStakeClick = async () => {
    setShowStakeModal(true);
  };

  const handleClaimClick = async () => {
    setLoading(true);
    await claim(id);
    setLoading(false);
    fetchFilm();
  };

  return (
    <>
      <Flex justifyContent="space-around" p="5" flexDirection="row">
        <Button onClick={handleStakeClick} width="25%" variant="brand2">
          STAKE
        </Button>
        {showWithdrawClaimBtn && (
          <>
            <Button
              onClick={handleWithdrawClick}
              width="25%"
              ml="2"
              variant="brand2"
            >
              WITHDRAW
            </Button>
            <Button
              onClick={handleClaimClick}
              width="25%"
              ml="2"
              variant="brand2"
            >
              CLAIM
            </Button>
          </>
        )}

        {showWithdrawModal && (
          <BasicModal
            onOpen={showWithdrawModal}
            onClose={closeWithDrawModal}
            onConfirm={onConfirmWithdraw}
            title={"Are you sure to withdraw your deposit?"}
            description={
              "Withdrawing will return your invested ETH, but you will lose the RAMA rewards accumilated"
            }
          />
        )}
        {showStakeModal && (
          <BasicModal
            onOpen={showStakeModal}
            onClose={closeStakeModal}
            onConfirm={onConfirmStake}
            title={"Fund this film"}
            description={"Enter the amount to stake "}
            withInput={true}
            stakeAmount={stakeAmount}
            setStakeAmount={setStakeAmount}
          />
        )}
      </Flex>
    </>
  );
}

export default StakingButtons;
