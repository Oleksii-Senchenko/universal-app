import React from 'react';
import { DivBox, SigninLink } from './HomePage.styled';

const HomePage = () => {
  return (
    <DivBox>
      <h1>Добро пожаловать в Phonebook</h1>
      <p>
        Ваш надежный и удобный инструмент для управления контактами. Здесь вы
        можете легко хранить, редактировать и находить ваши контакты.
      </p>
      <p>
        Мы создали этот сервис, чтобы облегчить вам жизнь и сделать управление
        контактами проще. Начните добавлять свои контакты сегодня и
        наслаждайтесь удобством, которое предоставляет Phonebook.
      </p>
      <SigninLink to="/signin">signin</SigninLink>
    </DivBox>
  );
};

export default HomePage;
