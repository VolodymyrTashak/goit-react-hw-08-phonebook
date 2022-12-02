import { ProgressBar } from 'react-loader-spinner';

import { SpinerBox } from './Spiner.styled';

export const Spiner = () => {
  return (
    <SpinerBox>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="#b758b7"
        barColor="#565678"
      />
    </SpinerBox>
  );
};
