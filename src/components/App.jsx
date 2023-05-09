import { useDispatch, useSelector } from 'react-redux';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyOptions } from 'utils/toastifyOptions';

// components
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

// redux
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import {
  getContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase().trim();
    const normalizedNumber = number.trim();

    const dublicate = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === normalizedName ||
        contact.number.trim() === normalizedNumber
    );
    return Boolean(dublicate);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate({ name, number })) {
      return toast.error(
        `This contact is already in contacts`,
        toastifyOptions
      );
    }
    dispatch(addContact({ name, number }));
    // const action = addContact({ name, number });
    // dispatch(action);
  };

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const changeFilter = e => {
    const action = setFilter(e.target.value.toLowerCase().trim());
    dispatch(action);
  };

  return (
    <Layout>
      <Section title="PhoneBook">
        <ContactForm onAddContact={onAddContact} />

        {contacts.length > 0 && (
          <>
            <Title title="Contacts" />
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
              onDelete={onDeleteContact}
              contacts={filteredContacts}
            />
          </>
        )}
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
