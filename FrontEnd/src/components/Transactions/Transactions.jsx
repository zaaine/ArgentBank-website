import React from 'react';
import PropTypes from 'prop-types';
import './transactions.scss';
import accountsMocks from '../../mocks/accountsMocks.js';

export default function Transactions({ transactions }) {
  return (
    <div className="transactions">
      {transactions.map((month, index) => (
        <div key={index} className="transactionMonth">
          <h4>{month.transactionsMonth}</h4>
          {month.transactionDetail.map((transaction, idx) => (
            <div key={idx} className="transactionDetail">
              <p>{transaction.TransactionDescription}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.balance}</p>
              <p>{transaction.subProperties.transactionType}</p>
              <p>{transaction.subProperties.category}</p>
              <p>{transaction.subProperties.note}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionsMonth: PropTypes.string.isRequired,
      transactionDetail: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          TransactionDescription: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          balance: PropTypes.string.isRequired,
          subProperties: PropTypes.shape({
            transactionType: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            note: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
