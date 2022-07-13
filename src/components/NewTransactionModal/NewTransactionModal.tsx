import React from 'react';
import ReactModal from 'react-modal';

import { Container } from './NewTransactionModal.styles';
import CloseImage from '../../assets/close.svg';

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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className='react-modal-close' onClick={OnRequestClose}>
        <img src={CloseImage} alt="Fechar" />
      </button>
      <Container>
        <h2>Registrar Transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Registrar
        </button>
      </Container>

    </ReactModal>
  );
};
