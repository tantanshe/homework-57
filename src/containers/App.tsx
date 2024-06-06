import UserForm from '../components/UserForm/UserForm';
import Users from '../components/Users/Users';

const App = () => {
  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm/>
          </div>
          <div className="col-4">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
