import { Box, Text, Center, VStack, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
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
    <Box bg="brand.yellow" height="40vh">
      <Center height="100%">{props.children}</Center>
    </Box>
  );
}

const Tile1 = () => {
  return (
    <Text fontWeight="bold" fontSize="50px" padding="20" textAlign="center">
      Empowering independent film funding with DeFi
    </Text>
  );
};

const Tile2 = () => {
  return (
    <>
      <VStack width="50%">
        <Text className="big-writing">Road map</Text>
        <Text textAlign="center" fontWeight="bold" fontSize="20px">
          <TriangleDownIcon /> On boarding initial projects to recieve funding
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
          fontWeight="bold"
          fontSize="30px"
          width="80%"
          pb="50"
        >
          Take the “decision making” out of the hands of the gargantuan entities
          who decide which stories will be told in the first place, and put that
          decision making power in the hands of citizens across the globe
        </Text>
        <Button
          onClick={() => {
            window.open("https://discord.gg/cPDuEWVn", "_blank");
          }}
          marginTop="20"
          variant="brand2"
        >
          LAUNCH DISCORD
        </Button>
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
