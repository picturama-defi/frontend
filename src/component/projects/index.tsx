import Header from "./Header";
import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import VideoContainer from "../common/VideoContainer";
import ProjectsList from "./ProjectsList";
import { highlightedProject } from "../../hardCodedData";

function Projects() {
  const tabs = ["All Projects", "Invested Projects"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [descriptionBoxHeight, setDescriptionBoxHeight] = useState(0);

  const handleTabSelect = (tabToChangeTo: string) => {
    setSelectedTab(tabToChangeTo);
  };

  useEffect(() => {
    if (document.getElementsByClassName("description-container").length > 0) {
      const descriptionBoxHeight = document.getElementsByClassName(
        "description-container"
      )[0].clientHeight;
      setDescriptionBoxHeight(descriptionBoxHeight * (3 / 4));
    }
  }, []);

  return (
    <>
      <Header />
      <Tabs selectedTab={selectedTab} onSelect={handleTabSelect} tabs={tabs} />
      <FeaturedProjectsTitle />
      <VideoContainer
        showDescription={true}
        descriptionBoxHeight={descriptionBoxHeight}
        details={highlightedProject}
      />
      <ProjectsList descriptionBoxHeight={descriptionBoxHeight} />
    </>
  );
}

const FeaturedProjectsTitle = () => {
  return (
    <Box height="50px" bg="brand.pink">
      <Center height="100%">Featured Projects</Center>
    </Box>
  );
};

export default Projects;
