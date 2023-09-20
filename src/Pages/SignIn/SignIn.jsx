import React, { useState } from 'react';
import {
  FormStyles,
  InputContainer,
  Inputs,
  Labels,
  TitleTexts,
  DivContainer,
  Submit,
} from './SignIn.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operationsAuth';

export const SignIn = () => {
  const dispath = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispath(registerUser({ name, email, password }));
  };

  return (
    <DivContainer>
      <TitleTexts>
        Hello, we are happy to meet you in our application😉
      </TitleTexts>
      <FormStyles onSubmit={handleSubmit}>
        <InputContainer>
          <Labels htmlFor="name">Имя</Labels>
          <Inputs type="text" name="name" id="name" onChange={handleInput} />
        </InputContainer>
        <InputContainer>
          <Labels htmlFor="email">Email</Labels>
          <Inputs type="email" name="email" id="email" onChange={handleInput} />
        </InputContainer>
        <InputContainer>
          <Labels htmlFor="password">Пароль</Labels>
          <Inputs
            type="password"
            name="password"
            id="password"
            onChange={handleInput}
          />
        </InputContainer>
        <p>
          If you have account - try <NavLink to="/login">log in</NavLink>
        </p>
        <Submit type="submit">Submit</Submit>
      </FormStyles>
    </DivContainer>
  );
};

export default SignIn;
