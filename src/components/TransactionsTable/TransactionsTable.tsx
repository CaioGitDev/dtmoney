import React from 'react';

import { Container } from './TransactionsTable.styles';

export const TransactionsTable: React.FC = () => {
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
          <tr>
            <td>a culpa é do batema</td>
            <td className="withdraw">€ 12.000</td>
            <td>Dev</td>
            <td>20/05/2022</td>
          </tr>
          <tr>
            <td>a culpa é do batema</td>
            <td className="deposit">€ 12.000</td>
            <td>Dev</td>
            <td>20/05/2022</td>
          </tr>
          <tr>
            <td>a culpa é do batema</td>
            <td>€ 12.000</td>
            <td>Dev</td>
            <td>20/05/2022</td>
          </tr>
          <tr>
            <td>a culpa é do batema</td>
            <td>€ 12.000</td>
            <td>Dev</td>
            <td>20/05/2022</td>
          </tr>
          <tr>
            <td>a culpa é do batema</td>
            <td>€ 12.000</td>
            <td>Dev</td>
            <td>20/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
