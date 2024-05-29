import React, { useState } from "react";
import PropTypes from "prop-types";
import TransactionDetail from "./TransactionDetail";
import "./account.scss";

const Account = ({ title, money, balanceType, transactions }) => {
	const [displayTransactions, setDisplayTransactions] = useState(false);

	const handleDisplayTransactions = () => {
		setDisplayTransactions(!displayTransactions);
	};

	return (
		<section className="account">
			<div class="row">
				<div className="accountContentWrapper">
					<h3 className="accountTitle">{title}</h3>
					<p className="accountAmount">{money}</p>
					<p className="accountAmountDescription">{balanceType}</p>
				</div>
				<div className="moreInf">
					<button
						onClick={handleDisplayTransactions}
						className={displayTransactions ? "fa fa-times" : "fa fa-angle-right"}></button>
				</div>
			</div>
			{displayTransactions && (
				<div className="transactionDetails">
					{transactions.map((transaction) => (
						<TransactionDetail
							key={transaction.transactionsMonth}
							transaction={transaction}
						/>
					))}
				</div>
			)}
		</section>
	);
};

Account.propTypes = {
	title: PropTypes.string.isRequired,
	money: PropTypes.string.isRequired,
	balanceType: PropTypes.string.isRequired,
	transactions: PropTypes.array.isRequired,
};

export default Account;
