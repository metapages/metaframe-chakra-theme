import React, {
  useCallback,
  useEffect,
} from 'react';

import {
  Button,
  Container,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { useKeyPress } from '@react-typed-hooks/use-key-press';

export const IconButtonWithConfirm: React.FC<{
  tooltip?: string;
  callback: () => void;
  modalHeader?: string;
  iconColor?: string;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  buttonIcon?: React.ComponentType;
  ariaLabel: string;
}> = ({ tooltip, ariaLabel, buttonIcon, callback, iconColor, modalHeader = "Confirm?", confirmButtonText = "Confirm", confirmButtonColor = "red" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickConfirm = useCallback(() => {
    callback();
    onClose();
  }, [callback, onClose]);

  const isEnterPressed = useKeyPress({ targetKey: "Enter" });
  useEffect(() => {
    if (isEnterPressed && isOpen) {
      callback();
      onClose();
    }
  }, [callback, onClose, isEnterPressed]);

  return (
    <>
      <Tooltip label={tooltip}>
        <Icon color={iconColor} as={buttonIcon} aria-label={ariaLabel} onClick={onOpen} />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Container h={"4rem"} pt={"1rem"}>
              <Text fontSize={"1rem"} align={"center"}>
                {modalHeader}
              </Text>
            </Container>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button colorScheme="gray" onClick={onClose} size="sm">
                Cancel
              </Button>
              <Button colorScheme={confirmButtonColor} onClick={onClickConfirm} size="sm">
                {confirmButtonText}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
