import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const checkStatus = isOnline => (isOnline ? 'green' : 'red');

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
      <ul className={css.friendlist}>
        {friends.map(f => (
          <li key={f.id} className={css.friendlistitem}>
            <p
              className={css.status}
              style={{ backgroundColor: checkStatus(f.isOnline) }}
            >
              &nbsp;
            </p>
            <img className={css.avatar} src={f.avatar} alt="User avatar" />
            <p className={css.name}>{f.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
