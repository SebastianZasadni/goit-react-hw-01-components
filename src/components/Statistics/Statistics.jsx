import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const randomColor = require('randomcolor');

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statlist}>
        {stats.map(s => (
          <li
            key={s.id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{s.label}</span>
            <br />
            <span className={css.percentage}>{s.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
