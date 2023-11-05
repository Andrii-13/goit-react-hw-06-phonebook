import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {deleteContact} from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const remainingContacts = contacts.filter(contact => contact.id !== contactId);
    dispatch(deleteContact(remainingContacts))
  };

  return (
    <List>
      {[
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          );
        }),
      ]}
    </List>
  );
};
