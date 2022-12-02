import styled from 'styled-components';

export const FilterBox = styled.div`
  display: block;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  color: #565678;
  font-size: 24px;
  text-transform: uppercase;
`;

export const FilterInput = styled.input`
  display: block;
  width: 50%;
  margin: 10px 0 15px;
  padding: 0 15px;
  border-radius: 20px;
  border: 3px solid #565678;
  outline: none;
  line-height: 40px;
  :focus {
    border: none;
    outline: 3px solid #b758b7;
  }
`;
