import React from 'react';
import {User} from '../../types';

interface UserItemProps {
  user: User;
}

const UserItem:React.FC<UserItemProps> = ({user}) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-header bg-dark.bg-gradient">
        <h5 className="card-title mb-0">{user.name}</h5>
      </div>
      <div className="row no-gutters p-2">
        <div>
          <p className="card-text small"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Activity:</strong> {user.activity ? 'Active' : 'Not active'}</p>
          <p className="card-text"><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;