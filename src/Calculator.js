import React from 'react';
import styled from 'styled-components';
import ButtonsContainer from './sections/ButtonsContainer';
import Readout from './sections/Readout';

const StyledCalculator = styled.div`
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Calculator = () => {
  return (
    <StyledCalculator>
      <Readout/>
      <ButtonsContainer/>
    </StyledCalculator>
  );
};

export default Calculator;
