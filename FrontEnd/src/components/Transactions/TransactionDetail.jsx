import React from "react";
import PropTypes from "prop-types";
import "./transactionDetail.scss";

const TransactionDetail = React.memo(({ subProperties }) => {
  return (
    <div className="subProperties">
      <div className="subProperties-header">
        <div className="subProperties-cell">Type</div>
        <div className="subProperties-cell">Category</div>
        <div className="subProperties-cell">Note</div>
      </div>
      <div className="subProperties-body">
        <div className="subProperties-row">
          <div className="subProperties-cell">{subProperties.transactionType}</div>
          <div className="subProperties-cell">{subProperties.category}</div>
          <div className="subProperties-cell">{subProperties.note}</div>
        </div>
      </div>
    </div>
  );
});

TransactionDetail.propTypes = {
  subProperties: PropTypes.shape({
    transactionType: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionDetail;
