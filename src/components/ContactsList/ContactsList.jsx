import React from 'react';
import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';


const ContactsList = ({contacts, onContactDelete}) => (
  <ul className="contacts-list">
    {contacts.map( ({id, ...rest}) => {
      return (
        <ContactsListItem key={id} {...rest} onDelete={() => onContactDelete(id)} />
      )
    })}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  })).isRequired,
  onContactDelete: PropTypes.func.isRequired
};

ContactsList.defaultProps = {
  // bla: 'test',
};

export default ContactsList;
