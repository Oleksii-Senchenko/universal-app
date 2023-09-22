import React from 'react';
import {
  Description,
  DivBox,
  GetStart,
  LoginLink,
  DeskContent,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <DivBox>
      <h1>Wellcome in Phonebook</h1>
      <DeskContent>
        <Description>
          It is the best phonebook service. It is secure. It is comfortable. It
          is faster.
        </Description>
        <Description>
          We created this service to make your life easier and simplify your
          work with contacts. let's start adding your contacts today and enjoy
          our application
        </Description>
      </DeskContent>

      <LoginLink to="/login">
        <GetStart>Get start</GetStart>
      </LoginLink>
    </DivBox>
  );
};

export default HomePage;
