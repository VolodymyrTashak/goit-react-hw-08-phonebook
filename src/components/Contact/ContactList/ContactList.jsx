import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { getContact, getFilteredContact } from 'redux/contacts/selectors';

import { ContactItem, ContactBtn, ContactInfo } from './ContactList.styled';

export const ContactList = () => {
  const { isLoading, error } = useSelector(getContact);
  const dispatch = useDispatch();

  const formatting = useSelector(getFilteredContact);

  return (
    <ul>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {formatting.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>{name}</ContactInfo>
          <ContactInfo>{number}</ContactInfo>
          <ContactBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
