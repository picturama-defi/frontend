import { Box, Text, Heading, Flex } from "@chakra-ui/layout";

const projects = [
  {
    title: "I$$Y AND THE LOST TORCH",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.`,
    percentageFunded: 45,
    imageUrl: "lost_torch.png",
  },
  {
    title: "BLOOD SHAMAN",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.`,
    percentageFunded: 25,
    imageUrl: "blood_shaman.png",
  },
];

function ProjectsList(props: any) {
  const { descriptionBoxHeight } = props;

  return (
    <Box bg="brand.yellow" mt={descriptionBoxHeight + "px"}>
      <Box p="20">
        {projects.map((project) => (
          <Project details={project} key={project.title} />
        ))}
      </Box>
    </Box>
  );
}

function Project(props: any) {
  const {
    details: { percentageFunded, title, description, imageUrl },
  } = props;

  return (
    <Box mt="5" border="2px solid black">
      <Flex flexDirection="row" p="5">
        <Box pr="5" width="50%" color="black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width="100%" src={`images/${imageUrl}`} alt={title}></img>
        </Box>
        <Box pl="5" position="relative" width="50%" color="black">
          <Text>{`${percentageFunded}% funded`}</Text>
          <Heading mt="2" size="lg">
            {title}
          </Heading>
          <Text mt="2">{description}</Text>
          <Text position="absolute" bottom="0">
            View project details
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProjectsList;
