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
  const [showClaimModal, setShowClaimModal] = useState(false);

  const [stakeAmount, setStakeAmount] = useState(0);

  const onConfirmWithdraw = async () => {
    setLoading(true);
    const res = await withdraw(id);
    if (!res) alert("Transaction failed!");
    setLoading(false);
    fetchFilm();
  };

  const onConfirmStake = async () => {
    setLoading(true);
    const res = await fundProject(id, stakeAmount);
    if (!res) alert("Transaction failed!");
    setLoading(false);
    fetchFilm();
  };

  const onConfirmClaim = async () => {
    setLoading(true);
    const res = await claim(id);
    if (!res) alert("Transaction failed!");
    setLoading(false);
    fetchFilm();
  };
  const closeWithDrawModal = () => {
    setShowWithdrawModal(false);
  };

  const closeStakeModal = () => {
    setStakeAmount(0);
    setShowStakeModal(false);
  };

  const closeClaimModal = () => {
    setShowClaimModal(false);
  };

  const handleWithdrawClick = async () => {
    setShowWithdrawModal(true);
  };

  const handleStakeClick = async () => {
    setShowStakeModal(true);
  };

  const handleClaimClick = async () => {
    setShowClaimModal(true);
  };

  return (
    <>
      <Flex justifyContent="space-around" p="5" flexDirection="row">
        {!showWithdrawClaimBtn && (
          <Button onClick={handleStakeClick} width="25%" variant="brand2">
            STAKE
          </Button>
        )}
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
        {showClaimModal && (
          <BasicModal
            onOpen={showClaimModal}
            onClose={closeClaimModal}
            onConfirm={onConfirmClaim}
            title={"Are you sure to claim your rewards ?"}
            description={
              "Claiming your rewards will lock your staked ETH in film funds and sent the RAMA accumilated to your wallet. You will no longer recieve APY returns once RAMA is claimed."
            }
          />
        )}
      </Flex>
    </>
  );
}

export default StakingButtons;
