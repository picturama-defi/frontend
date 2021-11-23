import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import MoveText from "./MoveText";
import StakingInfo from "./StakingInfo";
import Description from "./Description";
import Team from "./Team";
import { Button, Center } from "@chakra-ui/react";
import Loading from "../common/Loading";
import ApproveButton from "../common/ApproveButton";

function ProjectDetail(props: any) {
  const { details, isAdmin, id } = props;

  const isLoading = !details;

  if (isLoading) {
    return <Loading emptyColor="black" isLoading={isLoading} color="yellow" />;
  }

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
        <ApproveButton id={id} />
      </Center>
    </>
  );
}

export default ProjectDetail;
