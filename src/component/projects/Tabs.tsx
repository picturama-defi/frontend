import { HStack, Box, Center } from "@chakra-ui/layout";

function Tabs(props: any) {
  const { tabs } = props;

  return (
    <>
      <Box borderTop="1px solid black" background="brand.yellow" width="100%">
        <HStack width="100%">
          {tabs.map((tab: string) => (
            <Box
              cursor="pointer"
              p="5"
              width={`${100 / tabs.length}%`}
              bg="brand.yellow"
              key={tab}
            >
              <Center>{tab}</Center>
            </Box>
          ))}
        </HStack>
      </Box>
    </>
  );
}

export default Tabs;
