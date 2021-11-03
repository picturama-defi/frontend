import Header from "./Header";
import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import HighlightVideo from "./HighlightVideo";
import ProjectsList from "./ProjectsList";

function Projects() {
  const tabs = ["All Projects", "Invested Projects"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [descriptionBoxHeight, setDescriptionBoxHeight] = useState(0);

  const handleTabSelect = (tabToChangeTo: string) => {
    setSelectedTab(tabToChangeTo);
  };

  const highlightedProject = {
    percentageFunded: 75,
    title: "Blessed are the meeks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "https://player.vimeo.com/video/391331514?h=947ea22e11",
  };

  useEffect(() => {
    const descriptionBoxHeight = document.getElementsByClassName(
      "description-container"
    )[0].clientHeight;
    setDescriptionBoxHeight(descriptionBoxHeight * (3 / 4));
  }, []);

  return (
    <>
      <Header />
      <Tabs selectedTab={selectedTab} onSelect={handleTabSelect} tabs={tabs} />
      <FeaturedProjectsTitle />
      <HighlightVideo
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
