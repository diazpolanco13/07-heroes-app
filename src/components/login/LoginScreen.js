import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    history.replace("/");
  };

  return (
    <div className="container mt-5 w-50 border border-dark rounded p-5 align-middle">
      <form action="/examples/actions/confirmation.php" method="post">
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            required
          />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button onClick={handleLogin} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
