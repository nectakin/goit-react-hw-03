import { useEffect, useState } from 'react';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import SearchBox from '../SearchBox';

import styles from './App.module.css';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('saved-contacts')) ?? INITIAL_CONTACTS
  );
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) =>
    setContacts((prev) => [...prev, newContact]);

  const handleDeleteContact = (contactToDelete) =>
    setContacts((prev) => prev.filter(({ name }) => name !== contactToDelete));

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        items={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
export default App;