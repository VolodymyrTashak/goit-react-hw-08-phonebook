import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 400px;
  padding: 60px 50px;
  margin-top: 50px;
  margin: 50px auto 0;
  background-color: #565678;
  border-radius: 20px;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(
      to right bottom,
      rgba(43, 44, 78, 0.5),
      rgba(104, 22, 96, 0.5)
    );
  }
`;

export const FormBox = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
`;

export const Input = styled.input`
  display: block;
  width: 95%;
  margin: 10px 0 15px;
  padding-left: 25px;
  line-height: 40px;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  border-width: 0;
  :focus {
    border: none;
    outline: 2px solid #b758b7;
  }
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  margin: 0 auto;
  padding: 15px 30px;
  box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;
  border: #565678;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;
  :hover {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
  :focus {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
  :active {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
`;
