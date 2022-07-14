import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { api } from "../services/api";

interface ITransaction {
  id: number;
  title: string;
  value: number;
  category: string;
  type: string;
  createdAt: string;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionProviderProps {
  children: React.ReactNode;
}

interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
}

const TransactionContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData
);

export function TransactionProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);

  useEffect(() => {

    api.get('/transactions').then(response => {
      setTransactions(response.data.transactions);
    });

  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  return context;
}