import UserForm from '../components/UserForm/UserForm';
import Users from '../components/Users/Users';
import {useState} from 'react';
import {User} from '../types';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Tiffany', email: 'tiffany@gmail.com', activity: true, role: 'admin'},
    {id: '2', name: 'Tommy', email: 'tommy@gmail.com', activity: false, role: 'user'},
    {id: '3', name: 'Vivienne', email: 'vivienne@gmail.com', activity: true, role: 'editor'},
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  }
  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-4">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
