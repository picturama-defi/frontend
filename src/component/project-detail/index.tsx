import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import MoveText from "./MoveText";
import StakingInfo from "./StakingInfo";
import Description from "./Description";
import Team from "./Team";
import { Button, Center } from "@chakra-ui/react";

function ProjectDetail(props: any) {
  const { details, isAdmin } = props;

  if (!details) return null;

  return (
    <>
      <Header details={details} />
      <VideoContainer showDescription={false} details={details} />
      {!isAdmin && (
        <>
          <MoveText text={`${details?.percentageFunded}% funded`} />
          <StakingInfo />
        </>
      )}
      <Description description={details?.description} />
      <Team team={details?.team} />
      <Center pt="0" pb="20">
        <Button fontSize="xl" size="lg" variant="brand3">
          Approve
        </Button>
      </Center>
    </>
  );
}

export default ProjectDetail;
