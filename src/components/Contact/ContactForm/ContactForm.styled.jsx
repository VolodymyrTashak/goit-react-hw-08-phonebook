import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
  margin: 50px auto 0;
  max-width: 400px;
  padding: 60px 50px;
  background-color: #565678;
  border-radius: 20px;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right bottom,
      rgba(43, 44, 78, 0.5),
      rgba(104, 22, 96, 0.5)
    );
    border-radius: 20px;
  }
`;

export const FormBox = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
`;

export const FormLabel = styled.label`
  display: block;
  padding-left: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
`;

export const FormText = styled.p`
  font-size: 22px;
  margin-right: 14px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0 15px;
  padding: 0 15px;
  border-width: 0;
  border-radius: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  line-height: 40px;
  :focus {
    border: none;
    outline: 2px solid #b758b7;
  }
`;

export const FormBtn = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 15px 30px;
  border: #565678;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;
  font-weight: bold;
  color: white;
  transition: 0.15s ease-in-out;
  text-decoration: none;
  letter-spacing: 2px;
  :hover {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
  :focus {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
  &.active {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
`;
