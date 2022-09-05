import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { Phonebook } from './App.styled';
import { useLocalStorage } from 'components/hooks/hooks';
import { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addNewContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (
      contacts
        .map(contact => {
          return contact.name;
        })
        .includes(newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts([...contacts, newContact]);
      actions.resetForm();
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm value={contacts} onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onRemoveClick={deleteContact} />
      <GlobalStyle />
    </Phonebook>
  );
};

// Контролируемая форма

// import { GlobalStyle } from "./GlobalStyle";
// import { Box } from "./Box";

// import { Component } from 'react';
// import { Form } from './Form/Form';
// import {useState} from 'react';

// export const App = () => {

// const [contacts, setContacts] = useState([]);
// const [number, setNumber] = useState('');
// const [number, setNumber] = useState('');


// const handlerFormSubmit = data => {
//   console.log(data);
// }

//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Form onSubmit={handlerFormSubmit} />
//       </>
//     );
//   }
// }
