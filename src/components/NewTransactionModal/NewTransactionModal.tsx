import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Container, RadioButtonType, TransactionTypeContainer } from './NewTransactionModal.styles';
import CloseImage from '../../assets/close.svg';
import IncomeImage from '../../assets/income.svg';
import OutcomeImage from '../../assets/outcome.svg';

interface INewTransactionModalProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

export const NewTransactionModal: React.FC<INewTransactionModalProps> = ({
  isOpen,
  OnRequestClose,
}) => {

  const [type, setType] = useState('deposit');

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

        <TransactionTypeContainer>
          <RadioButtonType
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={IncomeImage} alt="Entrada" />
            <span>Entrada</span>
          </RadioButtonType>

          <RadioButtonType
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={OutcomeImage} alt="Saída" />
            <span>Saída</span>
          </RadioButtonType>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Registrar
        </button>
      </Container>

    </ReactModal>
  );
};
