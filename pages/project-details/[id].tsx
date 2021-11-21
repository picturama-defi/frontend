import ProjectDetail from "../../src/component/project-detail";

import { useRouter } from "next/router";
import { useAppContext } from "../../src/context/AppContext";

import { highlightedProject, projectsList } from "../../src/hardCodedData";
function ProjectDetailPage() {
  const [selectedAddress, setSelectedAddress]: any = useAppContext();
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null;

  const projectToShow = projectsList.find((item: any) => {
    return item.id == id;
  });
  console.log("Projects to show", projectToShow);
  return (
    <>
      <ProjectDetail details={projectToShow} />
    </>
  );
}

export default ProjectDetailPage;
