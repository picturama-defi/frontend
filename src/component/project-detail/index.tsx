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

function ProjectDetail(props: any) {
  const { details, isAdmin, id, selectedAddress } = props;

  const [loading, setLoading] = useState(false);

  if (!details || loading) {
    return <Loading emptyColor="black" color="yellow" />;
  }

  const src = `https://vumbnail.com/${extractVimeoId(
    details.demoReelLink
  )}.jpg`;

  return (
    <>
      <Header details={details} />
      <VideoContainer showDescription={false} details={details} />
      {!isAdmin && (
        <>
          <MoveText text={`${details?.percentageFunded || 0}% funded`} />
          <StakingInfo id={id} selectedAddress={selectedAddress} imgSrc={src} />
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
