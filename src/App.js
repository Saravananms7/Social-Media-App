import React, { useState } from 'react';
import './App.css';
import image from '../src/Images/login.png'; 

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [signupDetails, setSignupDetails] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

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
    if (signupDetails.password !== signupDetails.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle signup logic here
    console.log('Signup Details:', signupDetails);
    setError(''); // Clear error after successful submission
  };

  return (
    <div className="App">
      <div className="container">
        <div className="image-container">
          <img src={image} alt="Description of the image" />
        </div>
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
              {error && <p className="error">{error}</p>}
              <button type="submit">Signup</button>
            </form>
          )}
          <button className="switch-button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
