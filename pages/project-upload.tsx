// import UploadForm from "./../src/component/project-upload/UploadForm";

import dynamic from "next/dynamic";

const UploadForm = dynamic(
  () => {
    return import("./../src/component/project-upload/UploadForm");
  },
  { ssr: false }
);

const ProjectUpload = () => {
    return (
        <UploadForm />
    )
}

export default ProjectUpload