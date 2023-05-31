import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  handleSubmit = (name, number) => {

    const { contacts } = this.state;
    
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    }
    else {
      this.setState({
        contacts: [...contacts, {
          id: nanoid(),
          name,
          number
        }
        ]
      })
    }
  };

  handleFilter = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  handleDelete = (e) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== e.target.id);
    this.setState({ contacts: newContacts });
  };


  render() {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={this.handleSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={this.handleFilter} />
      <ContactList contacts={this.filteredContacts()} onClick={this.handleDelete} />
    </>
  )}
};

export default App