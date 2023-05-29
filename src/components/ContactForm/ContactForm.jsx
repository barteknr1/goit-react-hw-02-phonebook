import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid'

export class ContactForm extends Component {
    handleSubmit = evt => {
        evt.preventDefault();

        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const phone = form.elements.phone.value;

        console.log(name, phone);

        this.props.onSubmit({ name, phone });
        
        form.reset();
    }
    

    render() {
        return (
            <form className={css.contactForm} onSubmit={this.handleSubmit}>
                <label>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input
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

ContactForm.propTypes = {

};


export default ContactForm