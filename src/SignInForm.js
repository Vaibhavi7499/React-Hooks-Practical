import React, { useState } from "react";

const SignInForm = () => {
  let [isLogin, setLogin] = useState(false);

  let signUp = () => {
    setLogin(false);
  };

  let login = () => {
    setLogin(true);
  };

  return (
    <div className="col-md-4 m-auto">
      
        <h1 className="text-decoration-underline">
          {!isLogin ? "Sign Up" : "Login"}
        </h1>
        {!isLogin ? (
          <div>
            <div>
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-text">
              Lost Password? <a href="click here">Click Here!</a>
            </div>
          </div>
        )}
        <button className="btn btn-primary mt-3" onClick={signUp}>
          sign up
        </button>{" "}
        <button className="btn btn-primary mt-3" onClick={login}>
          Login
        </button>
    
    </div>
  );
};

export default SignInForm;
