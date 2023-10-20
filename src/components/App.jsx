import React, { useEffect, useState } from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { Application } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(contactsFromLS);
  }, []);

  useEffect(() => {

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = formState => {
    const contactId = nanoid(5);
    formState.id = contactId;
    if (
      contacts.find(
        ({ name }) => formState.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${formState.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, formState]);
  };

  const changeInput = input => {
    setFilter(input.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const findContact = () => {
    const filterContact = contacts.filter(({ name }) => {
      return name.includes(filter);
    });
    return filterContact;
  };

  return (
    <Application>
      <TitlePhonebook title="Phonebook" />
      <ContactForm onSubmitForm={formSubmitHandler} />
      <TitleContacts title="Contacts" />
      <Filter onChangeInput={changeInput} inputFilter={filter} />
      <ContactList
        onDeleteContact={deleteContact}
        onfindContact={findContact}
      />
    </Application>
  );
};
