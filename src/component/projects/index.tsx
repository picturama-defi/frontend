import Header from "./Header";
import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import VideoContainer from "../common/VideoContainer";
import ProjectsList from "./ProjectsList";
import { getFilms } from "../../API/main";
import { useAppContext } from "../../context/AppContext";
import { ADMIN_PUBLIC_ADDRESS } from "../../config";

function Projects() {
  const tabs = ["All Listed Projects", "Invested Projects", "All Projects"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [descriptionBoxHeight, setDescriptionBoxHeight] = useState(0);
  const [projectsList, setProjectsList]: any = useState(() => []);
  const [selectedAddress]: any = useAppContext();

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
    setHeightOfDescriptionContainer();
  }, [projectsList]);

  useEffect(() => {
    if (selectedTab !== "All Listed Projects") {
      setDescriptionBoxHeight(0);
    } else {
      setHeightOfDescriptionContainer();
    }
  }, [selectedTab]);

  const setHeightOfDescriptionContainer = () => {
    if (document.getElementsByClassName("description-container").length > 0) {
      const descriptionBoxHeight = document.getElementsByClassName(
        "description-container"
      )[0].clientHeight;
      setDescriptionBoxHeight(descriptionBoxHeight * (3 / 4));
    }
  };

  const isAdmin =
    selectedAddress?.toLowerCase() === ADMIN_PUBLIC_ADDRESS.toLowerCase();

  const isSignedIn = !!selectedAddress;

  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Tabs
          selectedTab={selectedTab}
          onSelect={handleTabSelect}
          tabs={tabs}
          isAdmin={isAdmin}
          isSignedIn={isSignedIn}
        />
        {selectedTab === "All Listed Projects" && projectsList.length > 0 && (
          <>
            <FeaturedProjectsTitle />
            <VideoContainer
              showDescription={true}
              descriptionBoxHeight={descriptionBoxHeight}
              details={projectsList[0]}
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
