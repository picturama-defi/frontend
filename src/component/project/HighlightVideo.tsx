import { Box, Center, VStack, Button } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";

const HighlightVideo = (props: any) => {
  const { details, descriptionBoxHeight } = props;

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
        <Box height={`${descriptionBoxHeight}px`} background="black"></Box>
      </Box>
    </>
  );
};

const Description = (props: any) => {
  const { details } = props;
  return (
    <>
      <Box width="8vw" height="8vw">
        <Center borderRadius="100%" className="play-button" height="100%">
          <BsFillPlayFill size="5vw" />
        </Center>
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
              {`${details.percentageFunded}% funded`}
            </Box>
            <Box
              position="relative"
              top="10px"
              backgroundColor="black"
              textAlign="center"
              width={details?.title.length * 20}
              p="2"
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

    .play-button {
      border: 2px solid yellow;
      color: yellow;
      cursor: pointer;
      background-color: black;
    }

    .play-button:hover {
      border: 2px solid black;
      color: black;
      cursor: pointer;
      background-color: #EA3EF7;
    }
`;

export default HighlightVideo;
