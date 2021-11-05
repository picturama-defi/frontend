import { Box, Text, Flex } from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Hoyt Dwyer",
    designation: "WRITER/DIRECTOR",
    location: "LOS ANGELES/CA",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "images/hoyt.png",
  },
  {
    name: "Haas Carter",
    designation: "PRODUCER",
    location: "LOS ANGELES/CA",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "images/haas.png",
  },
];

function Team() {
  return (
    <Box paddingBottom="500px" bg="black" color="brand.yellow" p="20" pt="0">
      <Box borderTop="1px solid yellow">
        <Text fontWeight="bold" pt="3">
          PROJECT TEAM
        </Text>
        <Box mt="10">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <Flex flexDirection="row">
            {teamMembers.map((teamMember) => (
              <MemberTile detail={teamMember} key={teamMember.name} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

const MemberTile = (props: any) => {
  const { detail } = props;
  return (
    <Box mr="10" borderBottom="1px solid yellow" width="220px">
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img width="100%" alt="image of a person" src={detail.image}></img>
      <Text mt="10" fontWeight="bold" fontSize="20">
        {detail.name.toUpperCase()}
      </Text>
      <Text mt="3" fontWeight="bold" fontSize="12">
        {detail.designation}
      </Text>
      <Text fontWeight="bold" fontSize="12">
        {detail.location}
      </Text>
      <Text mt="3">{detail.about}</Text>
      <Text pb="3" mt="3">
        {`Check out linkedin ->`}
      </Text>
    </Box>
  );
};

export default Team;
