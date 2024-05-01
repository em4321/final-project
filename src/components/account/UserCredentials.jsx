const UserCredentials = ({ name }) => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <div className="email">
        <input className="emailInput" type="email" name="email" id="email" />
      </div>{" "}
      <label htmlFor="password">Password</label>
      <div className="password">
        <input
          className="passwordInput"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="submit">
        <button className="submitFormButton">{name}</button>
      </div>
    </>
  );
};

export default UserCredentials;
