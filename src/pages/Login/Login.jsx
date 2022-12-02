import { LoginForm } from 'components/Auth/LoginForm/LoginForm';

import { Text } from 'pages/Home/Home.styled';

export const Login = () => {
  return (
    <div>
      <Text>Login Page</Text>
      <LoginForm />
    </div>
  );
};

export default Login;
