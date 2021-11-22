import { Box, Text, Heading, Flex, Center } from "@chakra-ui/layout";
import parse from "html-react-parser";
import { extractVimeoId } from "../../helper";
import { Spinner } from "@chakra-ui/spinner";
import Link from "next/link";
import { useAppContext } from "../../context/AppContext";

function ProjectsList(props: any) {
  const { descriptionBoxHeight, projectsList } = props;

  const isLoading = projectsList.length === 0;

  const [selectedAddress]: any = useAppContext();

  return (
    <>
      <Box
        position="relative"
        top={descriptionBoxHeight + "px"}
        p="10"
        pt="5"
        flex="1"
        bg="brand.yellow"
      >
        {isLoading && (
          <Center pt="20">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="black"
              size="xl"
            />
          </Center>
        )}
        {projectsList.map((project: any) => (
          <Project details={project} key={project.title} />
        ))}
      </Box>
    </>
  );
}

function Project(props: any) {
  const {
    details: {
      percentageFunded,
      title,
      description,
      imageUrl,
      demoReelLink,
      _id,
    },
  } = props;

  return (
    <Link href={`/project-details/${_id}/`} passHref>
      <Box
        cursor="pointer"
        bg="brand.yellow"
        _hover={{ bg: "brand.pink" }}
        mt="5"
        border="2px solid black"
      >
        <Flex flexDirection="row" p="5">
          <Box pr="5" width="50%" color="black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="100%"
              src={`https://vumbnail.com/${extractVimeoId(demoReelLink)}.jpg`}
              alt={title}
            ></img>
          </Box>
          <Box pl="5" position="relative" width="50%" color="black">
            {percentageFunded && <Text>{`${percentageFunded}% funded`}</Text>}
            <Heading mt="2" size="lg">
              {title}
            </Heading>
            <Text mt="2">{parse(description)}</Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
}

export default ProjectsList;
