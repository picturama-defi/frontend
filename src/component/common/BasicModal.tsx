import React from "react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

interface BasicModalProps {
  onOpen: boolean;
  onConfirm: any;
  onClose: any;
  title: string;
  description: string;
  withInput?: boolean;
  stakeAmount?: any;
  setStakeAmount?: any;
}
const BasicModal = ({
  onOpen,
  onConfirm,
  onClose,
  title,
  description,
  withInput = false,
  stakeAmount,
  setStakeAmount,
}: BasicModalProps) => {
  return (
    <>
      <Modal isOpen={onOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
          {withInput && (
            <InputGroup size="sm" p="4">
              <Input
                value={stakeAmount}
                onChange={(e) => {
                  console.log(e.target.value);
                  setStakeAmount(e.target.value);
                }}
                placeholder="Stake Amount"
                type="number"
              />
              <InputRightAddon children="ETH" />
            </InputGroup>
          )}
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onConfirm} variant="ghost">
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;
