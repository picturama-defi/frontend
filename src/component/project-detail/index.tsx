import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import { highlightedProject } from "../../hardCodedData";
import MoveText from "./MoveText";
import StakingInfo from "./StakingInfo";
import Description from "./Description";

function ProjectDetail(props: any) {
  return (
    <>
      <Header details={highlightedProject} />
      <VideoContainer showDescription={false} details={highlightedProject} />
      <MoveText text={`${highlightedProject.percentageFunded}% funded`} />
      <StakingInfo />
      <Description details={highlightedProject} />
    </>
  );
}

export default ProjectDetail;
