import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from './redux/contactsSlice';
import { nanoid } from 'nanoid';
const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNumberChange = e => {
    setNumber(e.target.value);
  };
  const inputNameChange = e => {
    setName(e.target.value);
  };
  const handlerSubmit = e => {
    e.preventDefault();
    const dataContacts = {
      id: nanoid(),
      name,
      number,
    };
    const isInContacts = contacts.some(
      el =>
        el.name.toLowerCase() ===
        e.currentTarget.elements.name.value.toLowerCase()
    );
    if (isInContacts) {
      alert(`${e.currentTarget.elements.name.value} is already in contacts`);
      e.currentTarget.elements.name.value = '';
      e.currentTarget.elements.number.value = '';
      return;
    }

    dispatch(addContact(dataContacts));

    e.currentTarget.elements.name.value = '';
    e.currentTarget.elements.number.value = '';
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        inputNumberChange={inputNumberChange}
        inputNameChange={inputNameChange}
        handlerSubmit={handlerSubmit}
      />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
