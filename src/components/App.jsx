import { Profile } from './profile/Profile.jsx';
import user from 'user.json';
import PropTypes from 'prop-types';

export const App = () => (
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  avatar: PropTypes.string,
};