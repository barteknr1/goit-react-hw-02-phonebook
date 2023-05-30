import React, { Component } from 'react';
import ContactListElement from './ContactListElement';
import { nanoid } from 'nanoid';

export class ContactList extends Component {
  render() {

    const {contacts} = this.props;
    return (
        <ul>  
        {contacts.map(contact =>
          <li key={nanoid()}> 
                <ContactListElement
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