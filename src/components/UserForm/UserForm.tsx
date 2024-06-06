const UserForm = () => {
  return (
    <form>
      <h4>Add new user</h4>
      <div className="form-group mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="activity">Activity</label>
        <input
          type="checkbox"
          name="activity"
          id="activity"
          checked
          className="form-check-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-select"
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
};

export default UserForm;