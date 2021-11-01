import Header from "./Header";
import Tabs from "./Tabs";
import { useState } from "react";

function Projects() {
  const tabs = ["All Projects", "Invested Projects"];

  return (
    <>
      <Header />
      <Tabs tabs={tabs} />
    </>
  );
}

export default Projects;
