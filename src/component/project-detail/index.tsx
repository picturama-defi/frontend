import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import MoveText from "./MoveText";
import StakingInfo from "./StakingInfo";
import Description from "./Description";
import Team from "./Team";

function ProjectDetail(props: any) {
  const { details } = props;

  if (!details) return null;

  return (
    <>
      <Header details={details} />
      <VideoContainer showDescription={false} details={details} />
      <MoveText text={`${details?.percentageFunded}% funded`} />
      <StakingInfo />
      <Description description={details?.description} />
      <Team team={details?.team} />
    </>
  );
}

export default ProjectDetail;
