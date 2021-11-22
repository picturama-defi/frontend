import { Spinner } from "@chakra-ui/spinner";
import { Center } from "@chakra-ui/layout";

function Loading(props: any) {
  const { color, emptyColor } = props;
  return (
    <Center pt="20">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor={emptyColor}
        color={color}
        size="xl"
      />
    </Center>
  );
}

export default Loading;
