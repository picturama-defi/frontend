import { Box, Center, Flex } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";

const HighlightVideo = () => {
  const videoLink = "https://player.vimeo.com/video/391331514?h=947ea22e11";

  return (
    <>
      <style>{style}</style>
      <Box className="video-container" width="100%">
        <iframe
          src={`${videoLink}&title=0&byline=0&portrait=0&controls=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          width="100%"
          height="100%"
        ></iframe>
        <Box className="description">
          <VideoDescription />
        </Box>
      </Box>
      <Box height="300px" background="black"></Box>
    </>
  );
};

const VideoDescription = () => {
  return (
    <>
      <Box
        backgroundColor="black"
        width="8vw"
        height="8vw"
        borderRadius="100%"
        border="2px solid yellow"
      >
        <Center height="100%">
          <BsFillPlayFill size="5vw" color="yellow" />
        </Center>
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
`;

export default HighlightVideo;