import React from 'react';
import { Profile } from './components/profile/Profile.jsx';
import { Statistics } from './components/statistics/Statistics.jsx';
import { FriendList } from './components/friendlist/FriendList.jsx';
import { Transactions } from './components/transactions/Transactions.jsx';
import data from './utils/data.json';
import user from './utils/user.json';
import friends from './utils/friends.json';
import transactions from './utils/transactions.json';

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <Transactions transactions={transactions} />
  </>
);
