import { Box, Text, Center, VStack, Button } from "@chakra-ui/react";

function Tiles() {
  return (
    <>
      <style>{style}</style>
      <TileParent>
        <Tile1 />
      </TileParent>
      <TileParent>
        <Tile2 />
      </TileParent>
      <TileParent>
        <Tile3 />
      </TileParent>
    </>
  );
}

function TileParent(props: any) {
  return (
    <Box bg="brand.yellow" height="400px">
      <Center height="100%">{props.children}</Center>
    </Box>
  );
}

const Tile1 = () => {
  return (
    <Text className="big-writing" fontWeight="bold" fontSize="50px">
      STATE WHY
    </Text>
  );
};

const Tile2 = () => {
  return (
    <>
      <VStack width="50%">
        <Text>Road map</Text>
        <Text
          textAlign="center"
          className="big-writing"
          fontWeight="bold"
          fontSize="50px"
        >
          CURRENTLY WE HAVE 6 FILMS
        </Text>
      </VStack>
    </>
  );
};

const Tile3 = () => {
  return (
    <>
      <VStack>
        <Text
          textAlign="center"
          className="big-writing"
          fontWeight="bold"
          fontSize="50px"
          width="80%"
        >
          SOMETHING TO SUPPORT THE ARGUMENT
        </Text>
        <Button variant="brand2">Launch discord</Button>
      </VStack>
    </>
  );
};

const style = `
  .big-writing {
    font-size: 3.5vw;
  }
`;

export default Tiles;
