import React from 'react';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './Summary.styles';

export const Summary: React.FC = () => {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposits += transaction.value;
      acc.total += transaction.value;
    } else if (transaction.type === 'withdraw') {
      acc.withdrawals += transaction.value;
      acc.total -= transaction.value;
    }

    return acc;
  }, {
    deposits: 0,
    withdrawals: 0,
    total: 0
  })

  return (

    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-PT', {
          style: 'currency',
          currency: 'EUR'
        }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>saídas</p>
          <img src={outcomeIcon} alt="Saídas" />
        </header>
        <strong>- {new Intl.NumberFormat('pt-PT', {
          style: 'currency',
          currency: 'EUR'
        }).format(summary.withdrawals)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-PT', {
          style: 'currency',
          currency: 'EUR'
        }).format(summary.total)}</strong>
      </div>
    </Container>
  );
};
