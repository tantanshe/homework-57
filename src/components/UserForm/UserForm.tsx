import React, {useState} from 'react';
import {User, UserMutation} from '../../types';

interface UserFormProps {
  onSubmit:(user: User) => void;
}
const UserForm:React.FC<UserFormProps> = ({onSubmit}) => {
  const [userMutation, setUserMutation] = useState<UserMutation>({
    name: '',
    email: '',
    activity: false,
    role: 'User',
  })

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  };

  const changeActivity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setUserMutation((prev) => ({
      ...prev,
      activity: checked,
    }));
  };

  const onFormSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...userMutation,
    });
    setUserMutation({
      name: '',
      email: '',
      activity: false,
      role: 'user',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={changeUser}
          value={userMutation.name}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          onChange={changeUser}
          value={userMutation.email}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="activity">Activity</label>
        <input
          type="checkbox"
          name="activity"
          id="activity"
          checked={userMutation.activity}
          className="form-check-input"
          onChange={changeActivity}        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-select"
          onChange={changeUser}
          value={userMutation.role}
        >
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
};

export default UserForm;