import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value })
  }
  
  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, contacts } = this.state;
    
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
  handleSearch = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  };
  handleDelete = e => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(person => person.id !== e.target.id);
    this.setState({ contacts: newContacts });
  };


render() {  
    
    
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm 
          onFormSubmit={this.handleSubmit}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
        />
        <h2>Contacts</h2>
        <Filter 
          onFilterChange={this.handleFilterChange}
        />
        <ContactList 
          contacts={this.state.contacts}
        /> 
      </>
    )
  }
}

export default App