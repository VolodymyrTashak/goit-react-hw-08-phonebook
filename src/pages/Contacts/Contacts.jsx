import { useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/Contact/ContactForm/ContactForm';
import { ContactList } from 'components/Contact/ContactList/ContactList';
import { Filter } from 'components/Contact/Filter/Filter';
import { Spiner } from 'components/Spiner/Spiner';

import { Box } from 'components/Box/Box.styled';
import { Title, Text } from 'components/App/App.styled';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForm />
      <Text>Contacts</Text>
      <Filter />
      {isLoading && !error && <Spiner />}
      <ContactList />
    </Box>
  );
};

export default Contacts;
