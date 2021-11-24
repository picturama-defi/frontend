import React from "react";
import { Button, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { ethers } from "ethers";
import { approveFilm } from "../../API/main";
import { useRouter } from "next/router";
import Loading from "./Loading";

const ApproveButton = ({ id, setLoading }: any) => {
  const router = useRouter();

  const goToProjects = () => {
    router.push("/projects");
  };

  const signMessage = async () => {
    try {
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const message = `Approve film:${id}`;
      const signature = await signer.signMessage(message);

      const payload = {
        signature,
        message,
      };

      setLoading(true);

      await approveFilm(payload);

      setLoading(false);

      alert("Approved film");

      goToProjects();
    } catch (err: any) {
      alert(err.message);
    }
  };
  const handleClick = () => {
    if (window?.ethereum) {
      signMessage();
    } else {
      alert("Install metamask");
    }
  };

  return (
    <Flex justifyContent="center" alignContent="center" alignItems="center">
      <Button variant={"brand3"} onClick={handleClick}>
        APPROVE PROJECT
      </Button>
    </Flex>
  );
};

export default ApproveButton;
