import './account.scss';
import PropTypes from 'prop-types';

export default function Account({ title, money, balanceType }) {
  return (
    <section className="account">
      <div className="accountContentWrapper">
        <h3 className="accountTitle">{title}</h3>
        <p className="accountAmount">{money}</p>
        <p className="accountAmountDescription">{balanceType}</p>
      </div>
      <div className="accountContentWrapper cta">
        <button className="transactionButton">View transactions</button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  balanceType: PropTypes.string.isRequired,
};
