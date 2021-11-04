import { Box, Text, Flex, Button } from "@chakra-ui/react";

function Description() {
  return (
    <>
      <Box color="brand.yellow" p="20">
        <Box borderTop="1px solid yellow"></Box>
        <Text pt="3" fontWeight="bold">
          PROJECT DETAILS
        </Text>
        <Text fontSize="30" pt="3">
          Plumb is a car salesman in the dying town of Kitchafoonee, GA who must
          make a commission before the end of the day when the loan sharks will
          come to collect.
        </Text>
        <Text pt="3">
          Act 1: One vulture in the tree. Plumb is harassed by loan sharks. He
          tries to drum up shoppers on the lot. His attempts are rebuked by the
          owner of the dealership.
        </Text>
        <Text pt="3">
          Act 2: A dozen vultures in the tree. After a failed sale attempt to an
          elderly widow from his church, Plumb makes a desperate call to his
          daughter in college. It becomes clear that Plumb has been taking out
          the loans to send her through school.
        </Text>
        <Text pt="3">
          Act 3: Vultures everywhere. Anguis, the head of their church, arrives
          with his son. He blackmails plumb into selling the widow’s husband’s
          car at a crippling discount. Plumb is left indebted to his employer to
          save both his and his daughter’s reputation within the close-knit
          community. Plumb is left broke and hopeless. He is meek.
        </Text>
        <Flex pt="10">
          <Button variant="brand3">PROJECT WEBSITE</Button>
          <Button ml="5" variant="brand3">
            DOWNLOAD SCRIPT
          </Button>
          <Button ml="5" variant="brand3">
            SHARE
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Description;
