import Header from "./Header";
import Tabs from "./Tabs";
import { useState } from "react";
import { Box, Center } from "@chakra-ui/layout";
import HighlightVideo from "./HighlightVideo";

function Projects() {
  const tabs = ["All Projects", "Invested Projects"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabSelect = (tabToChangeTo: string) => {
    setSelectedTab(tabToChangeTo);
  };

  console.log(selectedTab);

  return (
    <>
      <Header />
      <Tabs selectedTab={selectedTab} onSelect={handleTabSelect} tabs={tabs} />
      <FeaturedProjectsTitle />
      <HighlightVideo />
      <Box height="1000px" backgroundColor="yellow"></Box>
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
