import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  attack: string;
};

const AttackModal = ({ isOpen, onClose, attack }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Calculated ATK</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="5xl" textAlign="center">
            {attack}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AttackModal;
