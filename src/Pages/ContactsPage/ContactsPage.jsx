import ContactForm from 'components/ContactForm/ContactForm';
import Contactlist from 'components/Contactlist/Contactlist';
import React from 'react';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <Contactlist />
    </div>
  );
};

export default ContactsPage;
