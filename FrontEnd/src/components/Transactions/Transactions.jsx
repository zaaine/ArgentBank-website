import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions, getTransactionById, updateTransaction } from './actions';

const Transactions = () => {
    const dispatch = useDispatch();
    const transactionsState = useSelector(state => state.transactions);
    const token = useSelector(state => state.login.data?.token);
    const accountId = 1; // Assuming account ID is known
    const month = new Date().getMonth() + 1; // Current month

    useEffect(() => {
        if (token) {
            dispatch(getTransactions(token, accountId, month));
        }
    }, [token, accountId, month, dispatch]);

    const handleTransactionUpdate = (transactionId) => {
        const updatedTransaction = {
            amount: 100,
            description: 'Updated description',
        };
        dispatch(updateTransaction(token, accountId, transactionId, updatedTransaction));
    };

    return (
        <div>
            {transactionsState.loading && <p>Loading...</p>}
            {transactionsState.data && (
                <ul>
                    {transactionsState.data.transactions.map((transaction) => (
                        <li key={transaction.id}>
                            {transaction.description}: {transaction.amount}
                            <button onClick={() => handleTransactionUpdate(transaction.id)}>Update</button>
                        </li>
                    ))}
                </ul>
            )}
            {transactionsState.error && <p>{transactionsState.error}</p>}
        </div>
    );
};

export default Transactions;
