import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import { highlightedProject } from "../../hardCodedData";

function ProjectDetail() {
  return (
    <>
      <Header />
      <VideoContainer showDescription={false} details={highlightedProject} />
    </>
  );
}

export default ProjectDetail;
