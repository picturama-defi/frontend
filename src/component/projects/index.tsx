import Header from "./Header";
import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import VideoContainer from "../common/VideoContainer";
import ProjectsList from "./ProjectsList";
import { getFilms, getListedFilms, getNonFundedFilms } from "../../API/main";
import { useAppContext } from "../../context/AppContext";
import { ADMIN_PUBLIC_ADDRESS } from "../../config";
import { getRawFilmData, getUserFundedFilmIds } from "../../API/contract/main";

function Projects() {
  const tabs = ["All Listed Projects", "Invested Projects", "All Projects"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [descriptionBoxHeight, setDescriptionBoxHeight] = useState(0);
  const [projectsList, setProjectsList]: any = useState(() => []);
  const [selectedAddress]: any = useAppContext();
  const [percentageFundedFeatured, setPercentageFundedFeatured] = useState(0);

  const handleTabSelect = (tabToChangeTo: string) => {
    setSelectedTab(tabToChangeTo);
  };

  useEffect(() => {
    if (!projectsList[0]) {
      return;
    }
    getRawFilmData(projectsList[0]._id).then((res: any) => {
      if (!res) {
        return;
      }

      const percentage = (res["amountFundedSoFar"] / res["targetFund"]) * 100;

      setPercentageFundedFeatured(percentage);
    });
  }, [projectsList]);

  useEffect(() => {
    switch (selectedTab) {
      case "All Listed Projects":
        getListedFilms().then((res) => {
          setProjectsList(res);
        });
        break;
      case "Invested Projects":
        {
          getListedFilms().then(async (res) => {
            const userFundedFilms = await getUserFundedFilmIds();
            setProjectsList(
              //@ts-ignore
              res.filter((film: string) => userFundedFilms.includes(film._id))
            );
          });
        }
        break;
      case "All Projects":
        getNonFundedFilms().then((res) => {
          setProjectsList(res);
        });
        break;
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

  const isSignedIn = !!selectedAddress;

  const isAdmin =
    selectedAddress?.toLowerCase() === ADMIN_PUBLIC_ADDRESS.toLowerCase() &&
    !!isSignedIn;

  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header isSignedIn={isSignedIn} />
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
              percentageFundedFeatured={percentageFundedFeatured}
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
