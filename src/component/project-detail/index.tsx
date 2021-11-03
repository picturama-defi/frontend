import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import { highlightedProject } from "../../hardCodedData";
import MoveText from "./MoveText";
import StakingDetails from "./StakingDetails";

function ProjectDetail(props: any) {
  return (
    <>
      <Header details={highlightedProject} />
      <VideoContainer showDescription={false} details={highlightedProject} />
      <MoveText text={`${highlightedProject.percentageFunded}% funded`} />
      <StakingDetails />
    </>
  );
}

export default ProjectDetail;
