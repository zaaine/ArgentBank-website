import React, { useState } from "react";
import PropTypes from "prop-types";
import TransactionDetail from "./TransactionDetail";
import "./transactions.scss";

const Transactions = ({ transactions }) => {
	const [displaySubProperties, setDisplaySubProperties] = useState({});

	const handleDisplaySubProperties = (index) => {
		setDisplaySubProperties((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};

	return (
		<table className="transactions">
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Amount</th>
					<th>Balance</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map((month, monthIndex) => (
					<React.Fragment key={monthIndex}>
						{month.transactionDetail.map((detail, detailIndex) => (
							<React.Fragment key={detailIndex}>
								<tr>
									<td>{detail.date}</td>
									<td>{detail.TransactionDescription}</td>
									<td>{detail.amount}</td>
									<td>{detail.balance}</td>
									<td>
										<button
											onClick={() => handleDisplaySubProperties(`${monthIndex}-${detailIndex}`)}
											className={`fa ${displaySubProperties[`${monthIndex}-${detailIndex}`] ? "fa-times" : "fa-angle-right"}`}
										></button>
									</td>
								</tr>
								{displaySubProperties[`${monthIndex}-${detailIndex}`] && (
									<tr>
										<td colSpan="5">
											<TransactionDetail subProperties={detail.subProperties} />
										</td>
									</tr>
								)}
							</React.Fragment>
						))}
					</React.Fragment>
				))}
			</tbody>
		</table>
	);
};

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
				}).isRequired
			).isRequired,
		}).isRequired
	).isRequired,
};

export default Transactions;
