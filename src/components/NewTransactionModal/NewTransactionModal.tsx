import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Container, RadioButtonType, TransactionTypeContainer } from './NewTransactionModal.styles';
import CloseImage from '../../assets/close.svg';
import IncomeImage from '../../assets/income.svg';
import OutcomeImage from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface INewTransactionModalProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

export const NewTransactionModal: React.FC<INewTransactionModalProps> = ({
  isOpen,
  OnRequestClose,
}) => {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const transaction = { title, value, category, type };

    api.post('/transactions', transaction).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });

  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Registrar Transação</h2>
        <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />

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

        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

        <button type="submit">
          Registrar
        </button>
      </Container>

    </ReactModal>
  );
};
