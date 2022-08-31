import { GlobalStyle } from '../GlobalStyle';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { Phonebook } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

// Local Storage

  componentDidMount () {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts){
    this.setState({contacts: parsedContacts})
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновились контакты, добавляю контакты в хранилище');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };






  addNewContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (
      this.state.contacts
        .map(contact => {
          return contact.name;
        })
        .includes(newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
      actions.resetForm();
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };









  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm value={this.state} onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onRemoveClick={this.deleteContact}
        />
        <GlobalStyle />
      </Phonebook>
    );
  }
}



// Контролируемая форма 

// import { GlobalStyle } from "./GlobalStyle";
// import { Box } from "./Box";

// import { Component } from 'react';
// import { Form } from './Form/Form';

// export class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };


// handlerFormSubmit = data => {
//   console.log(data);
// }


//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.handlerFormSubmit} />
//       </>
//     );
//   }
// }