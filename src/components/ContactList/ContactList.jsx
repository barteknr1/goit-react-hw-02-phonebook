import React, { Component } from 'react';
import ContactListElement from './ContactListElement';

class ContactList extends Component {

  render() {
    const { contacts, onClick } = this.props;
    return (
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}>
            <ContactListElement onClick={onClick}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        )}
      </ul>
    )
  }
}

export default ContactList