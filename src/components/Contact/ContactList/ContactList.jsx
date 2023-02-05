import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { getContact, getFilteredContact } from 'redux/contacts/selectors';

import {
  ContactWrap,
  ContactLists,
  ContactItem,
  ContactBtn,
  ContactInfo,
} from './ContactList.styled';

export const ContactList = () => {
  const { isLoading, error } = useSelector(getContact);
  const dispatch = useDispatch();

  const formatting = useSelector(getFilteredContact);

  const onClick = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactWrap>
      <ContactLists>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {formatting.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>{name}</ContactInfo>
          <ContactInfo>{number}</ContactInfo>
          <ContactBtn
            type="button"
            onClick={() => {
              onClick(id);
            }}
          >
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ContactLists>
    </ContactWrap>
    
  );
};
