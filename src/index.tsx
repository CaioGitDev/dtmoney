import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'renda',
          value: 12000,
          category: 'casa',
          type: 'withdraw',
          createdAt: new Date('2021-05-20'),
        },
        {
          id: 2,
          title: 'freelancer',
          value: 30000,
          category: 'trabalho',
          type: 'deposit',
          createdAt: new Date('2021-09-20'),
        },
        {
          id: 3,
          title: 'carro',
          value: 150000,
          category: 'financiamento',
          type: 'withdraw',
          createdAt: new Date('2021-05-20'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
