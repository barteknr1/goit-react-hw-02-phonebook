import React, { Component } from 'react'
import css from './ContactForm.module.css'

export class ContactForm extends Component {

    render() {

        const { onFormSubmit, onNameChange, onNumberChange } = this.props
        
        return (
            <form className={css.contactForm} onSubmit={onFormSubmit}>
                <label>
                    <p>Name</p>
                    <input onChange={onNameChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input onChange={onNumberChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button
                    type="submit">Add contact</button>
            </form>
        )
  }
}

export default ContactForm