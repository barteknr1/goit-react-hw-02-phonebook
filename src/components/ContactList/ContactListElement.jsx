import React, { Component } from 'react'
import css from './ContactList.module.css'

class ContactListElement extends Component {

  render() {
    const { name, number, handleDelete } = this.props;

    return (
      <div className={css.contactElement}>{name}: {number}
        <button onClick={handleDelete} type='button'>Delete</button>
      </div>
    )
  }
}

export default ContactListElement