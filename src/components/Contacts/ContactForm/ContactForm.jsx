import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { Form, Input, Button, Label } from './ContactForm.styled';

Report.init({
  className: 'notiflix-report',
  width: '320px',
  backgroundColor: '#6495ed',
  success: {
    svgColor: '#4b0082',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#9370DB',
    buttonColor: '#4b0082',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },
  failure: {
    svgColor: '#4b0082',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#9370DB',
    buttonColor: '#4b0082',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onHandleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const findDoubleName = contacts.find(contact => {
      return contact.name === name;
    });
    if (findDoubleName) {
      Report.failure(
        'Ooopss..!!!',
        `Hey,BRO... ${name} is alredy in contacts`,
        "It's clear"
      );
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact({ name, number }));
    Report.success('Done, BRO...', `You added a contact ${name}`);
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={onHandleSubmit} autoComplete="off">
        <Label>
          Contact Name
          <Input
            autoFocus
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onHandleChange}
            value={name}
          />
        </Label>
        <Label>
          {' '}
          Contact Number
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onHandleChange}
            value={number}
          />
        </Label>
        <Button type="submit">ADD CONTACT</Button>
      </Form>
    </>
  );
};

export default ContactForm;
