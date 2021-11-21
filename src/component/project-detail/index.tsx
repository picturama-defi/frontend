import Header from "./Header";
import VideoContainer from "../common/VideoContainer";
import MoveText from "./MoveText";
import StakingInfo from "./StakingInfo";
import Description from "./Description";
import Team from "./Team";

import { useAppContext } from "../../context/AppContext";
import { ADMIN_PUBLIC_ADDRESS } from "../../config";
import ApproveButton from "../common/ApproveButton";

function ProjectDetail(props: any) {
  const { details } = props;
  const [selectedAddress, setSelectedAddress]: any = useAppContext();

  if (!details) return null;

  return (
    <>
      <Header details={details} />
      <VideoContainer showDescription={false} details={details} />
      {selectedAddress != ADMIN_PUBLIC_ADDRESS && (
        <MoveText text={`${details?.percentageFunded}% funded`} />
      )}
      {selectedAddress != ADMIN_PUBLIC_ADDRESS && <StakingInfo />}
      <Description description={details?.description} />
      <Team team={details?.team} />
      {selectedAddress == ADMIN_PUBLIC_ADDRESS && (
        <ApproveButton details={`APPROVE - ${details.title}`} />
      )}
    </>
  );
}

export default ProjectDetail;
