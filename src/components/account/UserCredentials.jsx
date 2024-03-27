const UserCredentials = () => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <div className="email">
        <input type="email" name="email" id="email" />
      </div>{" "}
      <label htmlFor="password">Password</label>
      <div className="password">
        <input type="password" name="password" id="password" />
      </div>
      <div className="submit">
        <button>Submit</button>
      </div>
    </>
  );
};

export default UserCredentials;
