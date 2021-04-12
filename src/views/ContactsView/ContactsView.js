import React, { useState } from 'react';
import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

const ContactsView = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* {loading && */}
      <h1>Загружаем ...</h1>
      {/* } */}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
