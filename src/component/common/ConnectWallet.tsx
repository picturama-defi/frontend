import { Button, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import{ useAppContext} from '../../context/AppContext';

declare global {
  interface Window {
    ethereum: any;
  }
}

const ConnectWallet = (props: any) => {
  const { variant } = props;
  const [selectedAddress, setSelectedAddress]: any = useAppContext();

  useEffect(() => {
    window.ethereum.on("accountsChanged", (res: any) => {
      setSelectedAddress(res[0]);
    });
    setSelectedAddress(window.ethereum.selectedAddress);
  }, []);

  const handleClick = () => {
    if (window?.ethereum) {
      connect();
    } else {
      alert("Install metamask");
    }
  };

  const connect = () => {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((res: any) => {
        setSelectedAddress(res[0]);
      });
  };

  return !selectedAddress ? (
    <>
      <Button variant={variant} onClick={handleClick}>
        Connect Wallet
      </Button>
    </>
  ) : (
    <>
      <Flex position="relative" top="14px" flexDirection="column">
        <Button variant="black">CONNECTED</Button>
        <Text
          fontWeight="bold"
          marginTop="10px"
          marginLeft="15px"
          fontSize="12"
        >
          {selectedAddress.split("").slice(0, 6).join("") + "..."}
        </Text>
      </Flex>
    </>
  );
};

export default ConnectWallet;
