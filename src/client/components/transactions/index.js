import React from 'react';

const Transactions = () => {
    const transactions = [
        {
            id: 1987656788,
            expenseAmount: 300,
            cashbackPercentage: 3,
            balanceAfter: 9700,
            name: "Epic Cheeseburger Cafe",
            category: "Restaurants"
        },
        {
            id: 1987656789,
            expenseAmount: 300,
            cashbackPercentage: 3,
            balanceAfter: 9700,
            name: "Epic Cheeseburger Cafe",
            category: "Restaurants"
        }
    ]
    return (
        <div>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        <span>- {transaction.expenseAmount}</span>
                        <span>{transaction.name}</span>
                        <span>category: {transaction.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
