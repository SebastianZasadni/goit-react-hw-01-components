import PropTypes from 'prop-types';
import { Profile } from './profile/Profile.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { FriendList } from './friendlist/FriendList.jsx';
import data from './statistics/data.json';
import user from './profile/user.json';
import friends from './friendlist/friends.json';

export const App = () => (
  <>
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
    <FriendList friends={friends} />
  </>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  avatar: PropTypes.string,
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};

FriendList.propTypes = {
  freind: PropTypes.array.isRequired,
};