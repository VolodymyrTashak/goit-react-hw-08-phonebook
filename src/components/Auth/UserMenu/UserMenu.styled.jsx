import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  color: #565678;
  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  margin: 0 auto;
  padding: 15px 30px;
  color: white;
  border: #565678;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;
  letter-spacing: 2px;
  transition: 0.15s ease-in-out;
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
