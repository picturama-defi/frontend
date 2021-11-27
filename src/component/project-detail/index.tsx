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
import { getFilmData, getRamaBalance } from "../../API/contract/main";

function ProjectDetail(props: any) {
  const { details, isAdmin, id, selectedAddress } = props;
  const [stakingDetails, setStakingDetails] = useState(null);
  const [ramaBalance, setRamaBalance] = useState(0);

  const [loading, setLoading] = useState(false);

  const fetchFilm = useCallback(() => {
    setLoading(true);
    getFilmData(id).then((res: any) => {
      getRamaBalance().then((res: any) => {
        setRamaBalance(res);
      });
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
          />
        </>
      )}
      <Description description={details?.description} />
      <Team team={details?.team} />
      {isAdmin && (
        <Center pt="0" pb="20">
          <ApproveButton setLoading={setLoading} id={id} />
        </Center>
      )}
    </>
  );
}

export default ProjectDetail;
