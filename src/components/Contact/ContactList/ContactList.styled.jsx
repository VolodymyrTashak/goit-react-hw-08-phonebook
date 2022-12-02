import styled from 'styled-components';

export const ContactLists = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  margin-right: 300px;
  list-style-type: none;
 
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const ContactInfo = styled.span`
  margin: 0px 20px;
  color: #565678;
`;

export const ContactBtn = styled.button`
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
