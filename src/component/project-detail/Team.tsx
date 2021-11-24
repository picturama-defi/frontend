import { Box, Text, Flex } from "@chakra-ui/react";
import router from "next/router";

function Team({ team }: any) {
  console.log(team);

  return (
    <Box paddingBottom="500px" bg="black" color="brand.yellow" p="20" pt="0">
      <Box borderTop="1px solid yellow">
        <Text fontWeight="bold" pt="3">
          PROJECT TEAM
        </Text>
        <Box mt="10">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <Flex flexDirection="row">
            {team.map((teamMember: any) => (
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
      <img width="100%" alt="image of a person" src={detail.photo}></img>
      <Text mt="10" fontWeight="bold" fontSize="20">
        {detail.name.toUpperCase()}
      </Text>
      <Text mt="3" fontWeight="bold" fontSize="12">
        {detail.role}
      </Text>
      <Text fontWeight="bold" fontSize="12">
        {detail.place}
      </Text>
      <Text mt="3">{detail.about}</Text>
      <a href={detail.linkedin} target="_blank" rel="noopener noreferrer">
        <Text
          p="2"
          pl="0"
          _hover={{ bg: "brand.yellow", color: "black" }}
          pb="3"
          mt="3"
          textAlign="center"
        >
          {`Check out linkedin ->`}
        </Text>
      </a>
    </Box>
  );
};

export default Team;
