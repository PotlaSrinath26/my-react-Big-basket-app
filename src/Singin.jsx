import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSignup, setIsSignup] = useState(false); // ← toggle login/signup

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
      setUserEmail(email);
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
  };

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {!isAuthenticated ? (
          <>
            <h2 className="login-title">{isSignup ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                {isSignup ? 'Register' : 'Sign In'}
              </button>
            </form>
            <p className="signup-text">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button className="signup-link" onClick={toggleMode}>
                {isSignup ? 'Login' : 'Sign up'}
              </button>
            </p>
          </>
        ) : (
          <div className="welcome-box">
            <h2 className="welcome-title">Welcome, {userEmail}!</h2>
            <button onClick={handleLogout} className="btn-logout">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
