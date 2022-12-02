import { useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/operations';

import {
  Form,
  FormBox,
  FormLabel,
  FormText,
  FormInput,
  FormBtn,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FormBox>
        <FormLabel>
          <FormText>Name</FormText>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          <FormText>Number</FormText>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <FormBtn type="submit">Add contact</FormBtn>
      </FormBox>
    </Form>
  );
};
