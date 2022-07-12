import React from 'react';
import ReactModal from 'react-modal';

import { Container } from './NewTransactionModal.styles';

interface INewTransactionModalProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

export const NewTransactionModal: React.FC<INewTransactionModalProps> = ({
  isOpen,
  OnRequestClose,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={OnRequestClose}
    >

    </ReactModal>
  );
};
