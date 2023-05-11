import React from 'react';
import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { FriendList } from './components/Friendlist/FriendList.jsx';
import { Transactions } from './components/Transactions/Transactions.jsx';
import data from './data/data.json';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
  <div>
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
  </div>
  );
  }
