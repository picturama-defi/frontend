import Header from "./Header";
import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import VideoContainer from "../common/VideoContainer";
import ProjectsList from "./ProjectsList";
import { highlightedProject } from "../../hardCodedData";
import { getFilms } from "../../API/main";

function Projects() {
  const tabs = ["All Listed Projects", "Invested Projects", "All Projects"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [descriptionBoxHeight, setDescriptionBoxHeight] = useState(0);
  const [projectsList, setProjectsList]: any = useState(() => []);

  const handleTabSelect = (tabToChangeTo: string) => {
    setSelectedTab(tabToChangeTo);
  };

  useEffect(() => {
    switch (selectedTab) {
      case "All Listed Projects":
        getFilms().then((res) => {
          setProjectsList(res);
        });
      case "Invested Projects": {
        getFilms().then((res) => {
          setProjectsList(res);
        });
      }
      case "All Projects":
        getFilms().then((res) => {
          setProjectsList(res);
        });
      default:
        getFilms().then((res) => {
          setProjectsList(res);
        });
    }
  }, [selectedTab]);

  useEffect(() => {
    if (selectedTab !== "All Listed Projects") {
      setDescriptionBoxHeight(0);
    } else {
      if (document.getElementsByClassName("description-container").length > 0) {
        const descriptionBoxHeight = document.getElementsByClassName(
          "description-container"
        )[0].clientHeight;
        setDescriptionBoxHeight(descriptionBoxHeight * (3 / 4));
      }
    }
  }, [selectedTab]);

  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Tabs
          selectedTab={selectedTab}
          onSelect={handleTabSelect}
          tabs={tabs}
        />
        {selectedTab === "All Listed Projects" && (
          <>
            <FeaturedProjectsTitle />
            <VideoContainer
              showDescription={true}
              descriptionBoxHeight={descriptionBoxHeight}
              details={highlightedProject}
            />
          </>
        )}

        <ProjectsList
          selectedTab={selectedTab}
          descriptionBoxHeight={descriptionBoxHeight}
          projectsList={projectsList}
        />
      </Box>
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
