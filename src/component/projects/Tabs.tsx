import { Flex, Box, Center } from "@chakra-ui/layout";

import { useAppContext } from "../../context/AppContext";
import { ADMIN_PUBLIC_ADDRESS } from "../../config";

function Tabs(props: any) {
  const { tabs, onSelect, selectedTab } = props;
  const [selectedAddress]: any = useAppContext();
  const handleTabClick = (selectedTab: string) => () => {
    onSelect(selectedTab);
  };

  const tabClass = (tab: string) => selectedTab === tab;

  const Tab = (props: any) => {
    const { tab } = props;

    return (
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
          <Box className="bottom-highlight" width="100%" height="5px"></Box>
        ) : null}
      </Box>
    );
  };

  console.log(selectedAddress)
  console.log(ADMIN_PUBLIC_ADDRESS)

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
          {tabs.map((tab: string) => {
            if (tab === "Invested Projects") {
              return selectedAddress ? <Tab tab={tab} key={tab} /> : "";
            }
            if (tab === "All Projects")
              return selectedAddress.toLowerCase() === ADMIN_PUBLIC_ADDRESS.toLowerCase() ? (
                <Tab tab={tab} key={tab} />
              ) : (
                ""
              );
            return <Tab tab={tab} key={tab} />;
          })}
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
        color:black;
    }

    .bottom-highlight {
        background-color:black;
    }
`;

export default Tabs;
