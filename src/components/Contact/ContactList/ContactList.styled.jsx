import styled from 'styled-components';

export const ContactWrap = styled.div`
    max-width: 500px;
    margin: 50px auto 0;
    background-color: #565678;
    border-radius: 20px;
    
`;

export const ContactLists = styled.ul`
  display: grid;
  margin: 0;
  list-style-type: none;
  padding: 0;
  background: linear-gradient(
    to right bottom,
    rgba(43, 44, 78, 0.5),
    rgba(104, 22, 96, 0.5)
  );
  border-radius: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 5px;
  border: 1px solid rgb(167 163 163 / 60%);
  border-radius: 10px;
  padding: 7px;
`;

export const ContactInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.6);
`;

export const ContactBtn = styled.button`
   display: inline-block;
   text-decoration: none;
   justify-content: center;
   align-items: center;
   height: 27px;
   outline: none;
   padding: 0px 15px;
   font-weight: bold;
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
