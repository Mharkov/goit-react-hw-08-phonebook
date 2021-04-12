import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('name@mail.ru');
  const [password, setPassword] = useState('QW1234!');

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup({ name, email, password }));

    // onSubmit(name, email, password);
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>
      <h2>RegisterView</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          onChange={handleChangeName}
          value={name}
        />
        Username
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

export default RegisterView;
