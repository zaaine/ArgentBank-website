import React from "react";
import PropTypes from "prop-types";

const TransactionDetail = ({ transaction }) => {
	return (
		<table>
			<thead className="thead">
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Amount</th>
					<th>Balance</th>
				</tr>
			</thead>
			<caption>{transaction.transactionsMonth}</caption>
			<tbody>
				{transaction.transactionDetail.map((detail, index) => (
					<tr key={index}>
						<td>{detail.date}</td>
						<td>{detail.TransactionDescription}</td>
						<td>{detail.amount}</td>
						<td>{detail.balance}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

TransactionDetail.propTypes = {
	transaction: PropTypes.object.isRequired,
};

export default TransactionDetail;
