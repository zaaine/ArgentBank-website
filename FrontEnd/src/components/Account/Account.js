import React, { useState } from "react";
import PropTypes from "prop-types";
import Transactions from "../Transactions/Transactions";
import "./account.scss";

const Account = ({ title, money, balanceType, transactions }) => {
	const [displayTransactions, setDisplayTransactions] = useState(false);

	const handleDisplayTransactions = () => {
		setDisplayTransactions(!displayTransactions);
	};

	return (
		<section className="account">
			<div className="row">
				<div className="accountContentWrapper">
					<h3 className="accountTitle">{title}</h3>
					<p className="accountAmount">{money}</p>
					<p className="accountAmountDescription">{balanceType}</p>
				</div>
				<div className="moreInf">
					<button
						onClick={handleDisplayTransactions}
						className={`fa ${displayTransactions ? "fa-times" : "fa-angle-right"}`}
					></button>
				</div>
			</div>
			{displayTransactions && (
				<div className="transactions">
					<Transactions transactions={transactions} />
				</div>
			)}
		</section>
	);
};

Account.propTypes = {
	title: PropTypes.string.isRequired,
	money: PropTypes.string.isRequired,
	balanceType: PropTypes.string.isRequired,
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

export default Account;
