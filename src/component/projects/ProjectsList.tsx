import { Box, Text, Heading, Flex, Center } from "@chakra-ui/layout";
import parse from "html-react-parser";
import { extractVimeoId } from "../../helper";
import Link from "next/link";
import Loading from "../common/Loading";

function ProjectsList(props: any) {
  const { descriptionBoxHeight, projectsList, isLoading } = props;

  if (isLoading) {
    return <Loading color="yellow" isLoading={isLoading} />;
  }

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
        {projectsList.length > 0 ? (
          projectsList.map((project: any) => (
            <Project details={project} key={project.title} />
          ))
        ) : (
          <Center>No projects to show</Center>
        )}
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
    <Link href={`/project-detail?id=${_id}`} passHref>
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
          <Box
            pl="5"
            position="relative"
            width="50%"
            color="black"
            overflow="hidden"
            textOverflow="ellipsis"
            maxHeight="60"
          >
            {percentageFunded && (
              <Text>{`${percentageFunded.toFixed(2)}% funded`}</Text>
            )}
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
