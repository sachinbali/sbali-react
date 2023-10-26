import { FC, useState } from 'react';

import BoldImage from './BoldStatement';
import ShowMessageButton from './ShowMessageButton';
import { Route, Routes } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const Name_password = username + '_' + password;

  function ValidateForm() {
    if (Name_password === '_') {
      alert('Some Fieled are empty');
      return;
    }
  }
  LoginUser
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              onClick={ValidateForm}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
            {Name_password}
          </p>
        </div>
      </form>
    </div>
  );
}

async function LoginUser(username, password) {
  return fetch('https://mocki.io/v1/84ced9d2-aabd-4b09-8a57-1c9124e60fc0', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(username),
    
  });
}
