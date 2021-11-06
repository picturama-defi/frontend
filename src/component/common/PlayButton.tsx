import { BsFillPlayFill } from "react-icons/bs";
import { Center } from "@chakra-ui/react";

function PlayButton(props: any) {
  const { onClick } = props;

  return (
    <>
      <style>{style}</style>
      <Center
        onClick={onClick}
        width="8vw"
        height="8vw"
        borderRadius="100%"
        className="play-button"
      >
        <BsFillPlayFill size="5vw" />
      </Center>
    </>
  );
}

const style = `
.play-button {
    border: 2px solid yellow;
    color: yellow;
    cursor: pointer;
    background-color: black;
}
`;

export default PlayButton;
