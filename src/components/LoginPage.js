import React, { useState } from 'react';
import './../css/login_form.css'

function LoginForm() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginIdChange = (event) => {
    setLoginId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className='icon'>
         
      </div>
      <div className="form-group">
        <label htmlFor="loginId">Login ID</label>
        <input
          type="text"
          id="loginId"
          name="loginId"
          value={loginId}
          onChange={handleLoginIdChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>

      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
