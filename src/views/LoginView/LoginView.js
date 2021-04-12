import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('name@mail.ru');
  const [password, setPassword] = useState('QW1234!');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h2>LoginView</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          Email address
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          Password
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default LoginView;
