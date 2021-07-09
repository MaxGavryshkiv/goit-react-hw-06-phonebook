import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p>
            {name}:{number}
          </p>
          <button
            className={styles.bttn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
