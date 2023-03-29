import './transactions.css';

export const Transactions = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead className="transactions-history__head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className="transactions-history__body">
        {transactions.map(t => (
          <tr key={t.id}>
            <td className="transactions-history__item">{t.type}</td>
            <td className="transactions-history__item">{t.amount}</td>
            <td className="transactions-history__item">{t.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
