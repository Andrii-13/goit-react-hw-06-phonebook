import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const remainingContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    dispatch(deleteContact(remainingContacts));
  };

  const findContact = () => {
    const filterContact = contacts.filter(({ name }) => {
      return name.includes(filterContacts);
    });
    return filterContact;
  };

  return (
    <List>
      {[
        findContact().map(({ id, name, number }) => {
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
