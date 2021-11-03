import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import { highlightedProject } from "../../hardCodedData";
import MoveText from "./MoveText";

function ProjectDetail(props: any) {
  return (
    <>
      <Header />
      <VideoContainer showDescription={false} details={highlightedProject} />
      <MoveText text={`${highlightedProject.percentageFunded}% funded`} />
    </>
  );
}

export default ProjectDetail;
