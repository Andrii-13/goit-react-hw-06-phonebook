import React from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { Application } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { useSelector} from 'react-redux';

export const App = () => {
  // const contacts = useSelector(state => state.contacts.contacts)

  // const [filter, setFilter] = useState('');

  // useEffect(() => {   
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeInput = input => {
  //   setFilter(input.value);
  // };

  // const findContact = () => {
  //   const filterContact = contacts.filter(({ name }) => {
  //     return name.includes(filter);
  //   });
  //   return filterContact;
  // };

  return (
    <Application>
      <TitlePhonebook title="Phonebook" />
      <ContactForm  />
      <TitleContacts title="Contacts" />
      <Filter/>
      <ContactList        
        // onfindContact={findContact}
      />
    </Application>
  );
};
