import { useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/Contact/ContactForm/ContactForm';
import { ContactList } from 'components/Contact/ContactList/ContactList';
import { Filter } from 'components/Contact/Filter/Filter';
import { Spiner } from 'components/Spiner/Spiner';

import { Text } from 'pages/Home/Home.styled';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div>
      <Text>Phonebook</Text>
      <ContactForm />
      <Text>Contacts</Text>
      <Filter />
      {isLoading && !error && <Spiner />}
      <ContactList />
    </div>
  );
};

export default Contacts;
