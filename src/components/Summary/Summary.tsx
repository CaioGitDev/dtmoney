import React, { useContext } from 'react';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { TransactionContext } from '../../contexts/TransactionContext';

import { Container } from './Summary.styles';

export const Summary: React.FC = () => {

  const { transactions } = useContext(TransactionContext);

  return (

    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="Entradas" />
        </header>
        <strong> + €1000</strong>
      </div>
      <div>
        <header>
          <p>saídas</p>
          <img src={outcomeIcon} alt="Saídas" />
        </header>
        <strong> - €195</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>€3552</strong>
      </div>
    </Container>
  );
};
