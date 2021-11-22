import { Box, Text, Heading, Flex } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";

import { getFilms } from "../../API/main";
import parse from "html-react-parser";

import { extractVimeoId } from "../../helper";

import Link from "next/link";

function ProjectsList(props: any) {
  const { descriptionBoxHeight, selectedTab } = props;
  const [projectsList, setProjectsList]: any = useState(() => []);

  useEffect(() => {
    switch (selectedTab) {
      case "All Listed Projects":
        getFilms().then((res) => {
          setProjectsList(res);
        });
      case "Invested Projects": {
        getFilms().then((res) => {
          setProjectsList(res);
        });
      }
      case "All Projects":
        getFilms().then((res) => {
          setProjectsList(res);
        });
      default:
        getFilms().then((res) => {
          setProjectsList(res);
        });
    }
  }, [selectedTab]);

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
      id,
    },
  } = props;

  return (
    <Link href={`/project-details/${id}/`} passHref>
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
