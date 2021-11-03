import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import { highlightedProject } from "../../hardCodedData";
import Ticker from "./Ticker";

function ProjectDetail() {
  return (
    <>
      <Header />
      <VideoContainer showDescription={false} details={highlightedProject} />
      <Ticker />
    </>
  );
}

export default ProjectDetail;
