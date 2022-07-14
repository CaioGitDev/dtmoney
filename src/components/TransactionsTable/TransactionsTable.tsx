import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './TransactionsTable.styles';

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions?.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {(transaction.type === 'withdraw') ? '-' : ''}
                    {new Intl.NumberFormat('pt-PT', {
                      style: 'currency',
                      currency: 'EUR'
                    }).format(transaction.value)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{new Intl.DateTimeFormat('pt-PT').format(
                    new Date(transaction.createdAt)
                  )}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Container>
  );
};
