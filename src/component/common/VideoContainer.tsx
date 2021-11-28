import { Box, Center, VStack, Button } from "@chakra-ui/react";
import PlayButton from "./PlayButton";
import VideoModal from "./VideoModal";
import { useState } from "react";
import parse from "html-react-parser";
import { extractVimeoId } from "../../helper";
import { useRouter } from "next/router";

const VideoContainer = (props: any) => {
  const {
    details,
    descriptionBoxHeight,
    showDescription,
    percentageFundedFeatured,
  } = props;

  const videoId = extractVimeoId(details.demoReelLink);

  const vimeoLink = `https://player.vimeo.com/video/${videoId}?h=947ea22e11`;

  return (
    <>
      <style>{style}</style>
      <Box className="video-container" width="100%">
        <iframe
          src={`${vimeoLink}&title=0&byline=0&portrait=0line=0&portrait=0&controls=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          width="100%"
          height="100%"
        ></iframe>
        <Box className="description">
          <VideoOverlay
            videoId={videoId}
            showDescription={showDescription}
            details={details}
            percentageFundedFeatured={percentageFundedFeatured}
          />
        </Box>
        <Box height={`${descriptionBoxHeight}px`} background="black"></Box>
      </Box>
    </>
  );
};

const ProjectDetailVideo = (props: any) => {
  const { videoId } = props;

  return (
    <>
      <style>{style}</style>
      <Box className="video-container" width="100%">
        <a>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?h=947ea22e11&title=0&byline=0&portrait=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            width="100%"
            height="100%"
          ></iframe>
        </a>
      </Box>
    </>
  );
};

const VideoOverlay = (props: any) => {
  const { details, showDescription, videoId, percentageFundedFeatured } = props;

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onPlayClick = () => {
    setIsOpen(true);
  };

  const onModalClose = () => {
    setIsOpen(false);
  };

  const onProjectClick = () => {
    router.push(`/project-details?id=${details._id}`);
  };

  return (
    <>
      <VideoModal
        onClose={onModalClose}
        isOpen={isOpen}
        modalBody={<ProjectDetailVideo videoId={videoId} />}
      />
      <Box width="8vw" height="8vw">
        <PlayButton onClick={onPlayClick} />
        {showDescription ? (
          <Center className="description-container">
            <VStack>
              <Box
                position="relative"
                top="10px"
                backgroundColor="black"
                textAlign="center"
                fontSize="15px"
                p="2"
              >
                {`${percentageFundedFeatured.toFixed(2)}% funded`}
              </Box>
              <Box
                position="relative"
                top="10px"
                backgroundColor="black"
                textAlign="center"
                width={details?.title.length * 20}
                p="2"
                minWidth="300px"
              >
                {details?.title.toUpperCase()}
              </Box>
              <Box
                position="relative"
                top="10px"
                backgroundColor="black"
                textAlign="center"
                fontSize="15px"
                p="2"
              >
                {parse(details?.description.split("").slice(0, 300).join(""))}
              </Box>
              <Button
                onClick={onProjectClick}
                position="relative"
                top="20px"
                variant="brand3"
              >
                VIEW PROJECT DETAILS
              </Button>
            </VStack>
          </Center>
        ) : null}
      </Box>
    </>
  );
};

const style = `
    .video-container {
      height: calc(34vw);
      position: relative;
    }

    .description {
      position: absolute;
      top: 50%;
      left: 50%;
      color:yellow;
      font-size:50px;
      transform: translate(-50%, -50%);
    }

    .play-button:hover {
      border: 2px solid black;
      color: black;
      cursor: pointer;
      background-color: #EA3EF7;
    }

    .vp-controls {
      display:none !important;
    }
`;

export default VideoContainer;
