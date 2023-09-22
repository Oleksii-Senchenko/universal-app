import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';
import { DivWrapper, FormStyles, Inputs, Submit } from './ContactForm.styled';
import { DivContainer } from 'Pages/SignIn/SignIn.styled';
import Filter from 'components/Filter/Filter';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      return;
    }
    const finedNumber = contacts.find(
      contact =>
        contact.number && contact.number.toLowerCase() === number.toLowerCase()
    );

    if (finedNumber) {
      alert(
        `In your phoneBook already have this number his name is ${finedNumber.name}`
      );
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <DivContainer>
      <DivWrapper>
        <FormStyles onSubmit={handleSubmit}>
          <Inputs
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleInput}
            required
          />
          <Inputs
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={number}
            onChange={handleInput}
            required
          />
          <Submit type="submit">Add Contact</Submit>
        </FormStyles>
      <Filter />
      </DivWrapper>
    </DivContainer>
  );
}

export default ContactForm;
