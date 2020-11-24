import React from 'react';
import PropTypes from 'prop-types';
import './ContactsListItem.scss';


const ContactsListItem = ({name, number, onDelete}) => (
  <li className="contacts-list__item">
    <span className="contacts-list__item-text">{name}: {number}</span>
    <button type="button" onClick={onDelete} className="contacts-list__item-btn">Delete</button>
  </li>
);

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete:  PropTypes.func.isRequired
};


export default ContactsListItem;
