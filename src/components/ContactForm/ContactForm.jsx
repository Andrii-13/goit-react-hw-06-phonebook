import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submitForm = e => {
    e.preventDefault();
    onSubmitForm({'name':name, 'number': number});
    setName('');
    setNumber('');
  };

  const changeInput = input => {
    switch (input.name) {
      case 'name':
        setName(input.value);
        break;
      case 'number':
        setNumber(input.value);
        break;
      default:
    }
  };

  const inputNameId = nanoid(5);
  const inputNamberId =  nanoid(5);

   return (
    <Form onSubmit={submitForm}>
      <label htmlFor={inputNameId}>Name</label>
      <input
        type="text"
        id={inputNameId}
        name="name"
        placeholder="Enter name ..."
        // колбек потрібен щоб передати інфу, інашке ми її викличемо і на onChange прилетить виконання функції, а нам потрибно щоб запустилась
        onChange={e => {
          return changeInput(e.target);
        }}
        value={name}
        required
      />
      <label htmlFor={inputNamberId}>Number</label>
      <input
        type="tel"
        name="number"
        id={inputNamberId}
        placeholder="tel: xxx-xx-xx"
        onChange={e => {
          return changeInput(e.target);
        }}
        value={number}
        required
      />
      <button type="submit">Add contact</button>
    </Form>
  );
};