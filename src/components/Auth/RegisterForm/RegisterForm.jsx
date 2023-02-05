import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import { register } from 'redux/auth/operations';

import { Form, FormBox, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    if (form.password.value.length !== 7) {
      Notiflix.Notify.warning(
        'Please, the password must have more than 7 symbols!'
      );
    }
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormBox>
        <Label>
          Username
          <Input type="text" name="name" placeholder='Adrian Cross' />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" placeholder='across@mail.com' />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder='examplepwd12345' />
        </Label>
        <Button type="submit">Register</Button>
      </FormBox>
    </Form>
  );
};
