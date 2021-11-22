import ProjectDetail from "../../src/component/project-detail";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getFilm } from "../../src/API/main";
import { useAppContext } from "../../src/context/AppContext";
import { ADMIN_PUBLIC_ADDRESS } from "../../src/config";

function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [selectedAddress]: any = useAppContext();

  useEffect(() => {
    if (!id) {
      return;
    }

    getFilm(id).then((res) => {
      setProject(res);
    });
  }, [id]);

  const isAdmin =
    selectedAddress?.toLowerCase() === ADMIN_PUBLIC_ADDRESS.toLowerCase();

  return (
    <>
      <ProjectDetail isAdmin={isAdmin} details={project} />
    </>
  );
}

export default ProjectDetailPage;
