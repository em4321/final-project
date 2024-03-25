const UserCredentials = () => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button>Signup</button>
    </>
  );
};

export default UserCredentials;
