import React, { Component } from 'react';
import ContactListElement from './ContactListElement';
import { nanoid } from 'nanoid';

class ContactList extends Component {

  render() {
    const { contacts, handleDelete } = this.props;

    return (
      <ul>
        {contacts.map(contact =>
          <li key={nanoid()}>
            <ContactListElement onClick={handleDelete}
              name={contact.name}
              number={contact.number}
            />
          </li>
        )}
      </ul>
    )
  }
}

export default ContactList