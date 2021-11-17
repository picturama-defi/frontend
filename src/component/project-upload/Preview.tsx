import React from 'react';
import VideoContainer from "../common/VideoContainer";
import { highlightedProject } from "../../hardCodedData";
import MoveText from "../project-detail/MoveText";
import StakingInfo from "../project-detail/StakingInfo";
import Description from "../project-detail/Description";
import Team from "../project-detail/Team";
import parse from 'html-react-parser';

import {  useFormContext } from "react-hook-form";

const Preview = () => {
    const { getValues   } = useFormContext();
    return (
        <div>
            Preview
            {getValues("title")}
            {/* {getValues("projectScript")} */}
            {getValues("demoReelLink")}
            {getValues("targetFund")}
            {parse(getValues("description"))}
        </div>
    )
}

export default Preview
