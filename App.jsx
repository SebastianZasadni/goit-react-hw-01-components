import PropTypes from 'prop-types';
import { Profile } from './profile/Profile.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { FriendList } from './friendlist/FriendList.jsx';
import { Transactions } from './transactions/Transactions.jsx';
import data from './statistics/data.json';
import user from './profile/user.json';
import friends from './friendlist/friends.json';
import transactions from './transactions/transactions.json';

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
    <Transactions transactions={transactions} />
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
  friends: PropTypes.array.isRequired,
};

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};
