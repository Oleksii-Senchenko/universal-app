import ContactForm from 'components/ContactForm/ContactForm';
import Contactlist from 'components/Contactlist/Contactlist';
import Filter from 'components/Filter/Filter';
import React from 'react';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <Contactlist />
    </div>
  );
};

export default ContactsPage;
