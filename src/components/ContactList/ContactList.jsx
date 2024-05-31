
import PropTypes from 'prop-types';

import Contact from '../Contact';

import styles from './ContactList.module.css';

const ContactList = ({ items, handleDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {items.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          contactNumber={number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteContact: PropTypes.func,
};
