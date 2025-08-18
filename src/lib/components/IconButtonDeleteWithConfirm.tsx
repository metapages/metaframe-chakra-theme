import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { TrashSimple } from '@phosphor-icons/react';

import theme from '../theme';
import { IconButtonWithConfirm } from './IconButtonWithConfirm';

// Delete icon with a confirmation modal
export const IconButtonDeleteWithConfirm: React.FC<{
  callback: () => void;
  modalHeader?: string;
  iconColor?: string;
  ariaLabel?: string;
  tooltip?: string;
}> = ({ tooltip,  callback, iconColor, modalHeader = "Confirm deletion?", ariaLabel = "delete" }) => {
  return (
    <ChakraProvider theme={theme}>
      <IconButtonWithConfirm ariaLabel={ariaLabel || "delete"} tooltip={tooltip} callback={callback} buttonIcon={TrashSimple} confirmButtonColor={iconColor} modalHeader={modalHeader} />
    </ChakraProvider>
  );
};
