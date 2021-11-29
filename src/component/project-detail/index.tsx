import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import MoveText from "./MoveText";
import StakingInfo from "./StakingInfo";
import Description from "./Description";
import Team from "./Team";
import { Button, Center } from "@chakra-ui/react";
import Loading from "../common/Loading";
import ApproveButton from "../common/ApproveButton";
import { extractVimeoId } from "../../helper";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import {
  getFilmData,
  getRamaBalance,
  getFundOfUserOnAProject,
} from "../../API/contract/main";
import { getEthToUsdRate } from "../../API/contract/main";

function ProjectDetail(props: any) {
  const { details, isAdmin, id, selectedAddress } = props;
  const [stakingDetails, setStakingDetails] = useState(null);
  const [ramaBalance, setRamaBalance] = useState(0);

  const [loading, setLoading] = useState(false);
  const [showWithdrawClaimBtn, setShowWithdrawClainBtn] = useState(false);

  const [showStakeButton, setShowStakeButton] = useState(true);

  const [projectsList, setProjectsList]: any = useState(() => []);
  const [ethToUsd, setEthToUsd] = useState();

  const fetchFilm = useCallback(() => {
    setLoading(true);
    getEthToUsdRate().then((rate: any) => {
      setEthToUsd(rate);
    });
    getFilmData(id).then((res: any) => {
      getRamaBalance().then((res: any) => {
        setRamaBalance(res);
      });
      if (res?.isError) {
        setShowWithdrawClainBtn(false);
        console.log("Is funded: ", res?.isError);
      } else {
        setShowWithdrawClainBtn(true);
      }
      setStakingDetails(res);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchFilm();
  }, [id, fetchFilm]);

  useEffect(() => {
    getFundOfUserOnAProject(id).then((res: any) => {
      if (!res) {
        return;
      }
      console.log("API result: ", res);
      if (res["isUserFunded"]) setShowStakeButton(false);
      else setShowStakeButton(true);
    });
  });

  if (!details || loading) {
    return <Loading emptyColor="black" color="yellow" />;
  }

  const src = `https://vumbnail.com/${extractVimeoId(
    details.demoReelLink
  )}.jpg`;

  let percentageFunded = 0;

  if (stakingDetails) {
    //@ts-ignore
    percentageFunded = (
      (stakingDetails["amountFundedSoFar"] / stakingDetails["targetFund"]) *
      100
    ).toFixed(2);
  }

  if (isNaN(percentageFunded)) {
    percentageFunded = 0;
  }

  return (
    <>
      <Header details={details} />
      <VideoContainer showDescription={false} details={details} />
      {!isAdmin && (
        <>
          <MoveText text={percentageFunded + "% funded"} />
          <StakingInfo
            details={stakingDetails}
            id={id}
            selectedAddress={selectedAddress}
            imgSrc={src}
            setLoading={setLoading}
            fetchFilm={fetchFilm}
            ramaBalance={ramaBalance}
            showStakeButton={showStakeButton}
            showWithdrawClaimBtn={showWithdrawClaimBtn}
            stakingDetails={stakingDetails}
            setShowWithdrawClainBtn={setShowWithdrawClainBtn}
            ethToUsd={ethToUsd}
          />
        </>
      )}
      <Description
        description={details?.description}
        script={details?.script}
      />
      <Team team={details?.team} />
      {console.log("The staking details: ", stakingDetails)}
      {isAdmin && !details?.isFunded && (
        <Center pt="0" pb="20">
          <ApproveButton setLoading={setLoading} id={id} />
        </Center>
      )}
    </>
  );
}

export default ProjectDetail;
