import { Box } from "@chakra-ui/react";

const HomeVideo = () => {
  return (
    <>
      <style>{style}</style>
      <Box className="video-container" width="100%">
        <iframe
          src="https://player.vimeo.com/video/391331514?h=947ea22e11&title=0&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </>
  );
};

const style = `
    .video-container {
        height: calc(34vw);
    }
`;

export default HomeVideo;
