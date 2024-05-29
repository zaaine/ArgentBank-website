import React from "react";
import PropTypes from "prop-types";
import "./transactionDetail.scss";

const TransactionDetail = ({ subProperties }) => {
	return (
		<table className="subProperties">
			<thead>
				<tr>
					<th>Type</th>
					<th>Category</th>
					<th>Note</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{subProperties.transactionType}</td>
					<td>{subProperties.category}</td>
					<td>{subProperties.note}</td>
				</tr>
			</tbody>
		</table>
	);
};

TransactionDetail.propTypes = {
	subProperties: PropTypes.shape({
		transactionType: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		note: PropTypes.string.isRequired,
	}).isRequired,
};

export default TransactionDetail;
