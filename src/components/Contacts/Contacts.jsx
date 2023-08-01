import React from 'react';

import ContactForm from 'components/Contacts/ContactForm/ContactForm';
import Filter from 'components/Contacts/Filter/Filter';
import ContactList from 'components/Contacts/ContactList/ContactList';
import UserMenu from './UserMenu/UserMenu';

import {
  WrapperContacts,
  WrapperContactsList,
  WrapperContactForm,
} from './Contacts.styled';

const Contacts = () => {
  return (
    <WrapperContacts>
      <WrapperContactsList>
        <Filter />
        <ContactList />
      </WrapperContactsList>
      <WrapperContactForm>
        <ContactForm />
        <UserMenu />
      </WrapperContactForm>
    </WrapperContacts>
  );
};

export default Contacts;
