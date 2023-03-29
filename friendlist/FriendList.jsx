import './friendlist.css';

const checkStatus = isOnline => {
  switch (isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
      default:
        return null;
  }
};

export const FriendList = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map(f => (
          <li key={f.id} className="friend-list__item">
            <p
              className="status"
              style={{ backgroundColor: checkStatus(f.isOnline) }}
            >
              &nbsp;
            </p>
            <img className="avatar" src={f.avatar} alt="User avatar" />
            <p className="name">{f.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
        };

