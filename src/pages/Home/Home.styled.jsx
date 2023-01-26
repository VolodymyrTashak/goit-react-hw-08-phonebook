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

    @media (max-width: 480px) {
      width: 40%;
    };

    @media only screen and (min-width: 480px) and (max-width: 768px) {
      width: 25%;
    };

    @media only screen and (min-width: 769px) {
      width: 30%;
    };

    bottom: 0.25rem;
    left: 50%;
    border-bottom: 2px solid #565678;
    transform: translateX(-50%);
  }
  ::after {
    content: '';
    position: absolute;

    @media (max-width: 480px) {
      width: 25%;
    };

    @media only screen and (min-width: 480px) and (max-width: 768px) {
      width: 10%;
    };

    @media (min-width: 769px) {
      width: 15%;
    };

    bottom: 0;
    left: 50%;
    border-bottom: 2px solid #565678;
    transform: translateX(-50%);
  }
`;
