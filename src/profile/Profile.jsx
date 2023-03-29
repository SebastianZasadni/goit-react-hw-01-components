import './profile.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="description">
    <img alt="User avatar" src={avatar} className="avatar" />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <br />
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <br />
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <br />
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);
