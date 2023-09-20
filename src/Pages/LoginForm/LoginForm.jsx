import React, { useState } from 'react';
import {
  DivContainer,
  FormStyles,
  InputContainer,
  Inputs,
  Labels,
  TitleTexts,
} from '../SignIn/SignIn.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operationsAuth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setMail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
  };

  return (
    <DivContainer>
      <TitleTexts>
        Hello, we are happy see you again, log in to work with as🙃
      </TitleTexts>
      <FormStyles onSubmit={onSubmit}>
        <InputContainer>
          <Labels htmlFor="name">Email</Labels>
          <Inputs type="text" name="email" onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <Labels htmlFor="email">Password</Labels>
          <Inputs type="password" name="password" onChange={handleChange} />
        </InputContainer>

        <p>
          If dont have account - try <NavLink to="/signin">Sign In</NavLink>
        </p>
        <button>Submit</button>
      </FormStyles>
    </DivContainer>
  );
};

export default LoginForm;
