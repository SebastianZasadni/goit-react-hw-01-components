import './statistics.css';
const randomColor = require('randomcolor');

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(s => (
          <li
            key={s.id}
            className="item"
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{s.label}</span>
            <br />
            <span className="percentage">{s.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
