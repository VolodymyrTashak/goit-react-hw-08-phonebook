import styled from 'styled-components';

export const Text = styled.h1`
  position: relative;
  margin-top: 30px;
  padding-bottom: 0.5rem;
  text-align: center;
  color: #565678;
  font-size: 1.5rem;
  text-transform: uppercase;
  ::before {
    content: '';
    position: absolute;
    bottom: 0.25rem;
    left: 50%;
    width: 30%;
    border-bottom: 2px solid #565678;
    transform: translateX(-50%);
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 15%;
    border-bottom: 2px solid #565678;
    transform: translateX(-50%);
  }
`;
