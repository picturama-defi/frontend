import { Box, Center, VStack, Button } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";

const HighlightVideo = (props: any) => {
  const videoLink = "https://player.vimeo.com/video/391331514?h=947ea22e11";
  const details = props.details;

  return (
    <>
      <style>{style}</style>
      <Box className="video-container" width="100%">
        <iframe
          src={`${details.link}&title=0&byline=0&portrait=0&controls=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          width="100%"
          height="100%"
        ></iframe>
        <Box className="description">
          <Description details={details} />
        </Box>
        <Box height="200px" background="black"></Box>
      </Box>
    </>
  );
};

const Description = (props: any) => {
  const { details } = props;
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
        <Center>
          <VStack>
            <Box
              position="relative"
              top="10px"
              backgroundColor="black"
              textAlign="center"
              fontSize="15px"
              p="2"
            >
              {`${details.percentageFunded} funded`}
            </Box>
            <Box
              position="relative"
              top="10px"
              backgroundColor="black"
              textAlign="center"
              width="450px"
            >
              {details?.title.toUpperCase()}
            </Box>
            <Box
              position="relative"
              top="10px"
              backgroundColor="black"
              textAlign="center"
              fontSize="15px"
            >
              {details?.description}
            </Box>
            <Button position="relative" top="20px" variant="brand3">
              VIEW PROJECT DETAILS
            </Button>
          </VStack>
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
