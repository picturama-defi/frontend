import { Flex, Box, Center } from "@chakra-ui/layout";

function Tabs(props: any) {
  const { tabs, onSelect, selectedTab } = props;

  const handleTabClick = (selectedTab: string) => () => {
    onSelect(selectedTab);
  };

  const tabClass = (tab: string) => selectedTab === tab;

  return (
    <>
      <style>{style}</style>
      <Box
        borderBottom="1px solid black"
        borderTop="1px solid black"
        background="brand.yellow"
        width="100%"
      >
        <Flex flexDirection="row" justifyContent="space-around">
          {tabs.map((tab: string) => (
            <Box
              width="100%"
              cursor="pointer"
              key={tab}
              className="tab"
              onClick={handleTabClick(tab)}
              m="0"
              fontWeight="bold"
            >
              <Center p="5">{tab}</Center>
              {tabClass(tab) ? (
                <Box width="100%" height="5px" bg="black"></Box>
              ) : null}
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

const style = `
    .tab {
        background-color:brand.yellow;
    }

    .tab:hover {
        background-color:#EA3EF7;
        color:white;
    }
`;

export default Tabs;
