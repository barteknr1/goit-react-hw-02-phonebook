import React, { Component } from 'react'
import css from './ContactForm.module.css'

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    };
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target
        this.setState({ [name]: value });
        console.log(name, value);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.setState({ name: '', number: '' });
        console.log(name, number);
    };

    render() {
        const { name, number } = this.state;
        return (
            <form className={css.contactForm} onSubmit={this.handleSubmit}>
                <label>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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