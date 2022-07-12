import React, { useState } from 'react';
import { Container, Content } from './Header.styles';
import logoImg from '../../assets/logo.svg';

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  );
};
