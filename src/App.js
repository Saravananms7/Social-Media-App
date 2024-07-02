import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [signupDetails, setSignupDetails] = useState({ email: '', password: '', confirmPassword: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails({ ...signupDetails, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Details:', loginDetails);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup Details:', signupDetails);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={loginDetails.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={loginDetails.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={signupDetails.email}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={signupDetails.password}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={signupDetails.confirmPassword}
                onChange={handleSignupChange}
                required
              />
            </div>
            <button type="submit">Signup</button>
          </form>
        )}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Signup' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
}

export default App;

