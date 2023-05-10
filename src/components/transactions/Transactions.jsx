import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactionhistory}>
      <thead className={css.transactionshistoryhead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className="transactions-history__body">
        {transactions.map(t => (
          <tr key={t.id}>
            <td className={css.transactionshistoryitem}>{t.type}</td>
            <td className={css.transactionshistoryitem}>{t.amount}</td>
            <td className={css.transactionshistoryitem}>{t.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
