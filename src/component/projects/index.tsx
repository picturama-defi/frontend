import Header from "./Header";
import Tabs from "./Tabs";
import { useState } from "react";
import { Box } from "@chakra-ui/layout";

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
      <Box height="200px" bg="yellow"></Box>
    </>
  );
}

export default Projects;
