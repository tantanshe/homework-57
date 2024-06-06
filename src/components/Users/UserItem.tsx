import React from 'react';
import {User} from '../../types';

interface UserItemProps {
  user: User;
}

const UserItem:React.FC<UserItemProps> = ({user}) => {
  return (
    <div className="card mb-2 p-3">
      <div className="row no-gutters">
        <div>
          <h5 className="card-style">{user.name}</h5>
          <p className="card-text small">Email: {user.email}</p>
          <p className="card-text">Activity: {user.activity ? 'Active' : 'Not active'}</p>
          <p className="card-text">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;