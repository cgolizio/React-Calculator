import React from 'react';
import styled from 'styled-components';
import { StyledReadout } from '../../components/styled-components/Readout';

const Formula = styled(StyledReadout)`
  justify-content: flex-start;
  align-self: flex-start;
    &::after {
    content: 'prev.';
    font-size: 2.5rem;
    position: absolute;
    width: 97%;
  }
`;

const FormulaScreen = ({ formula }) => {
  return (
    <Formula
      size='5rem'
      height='20%'
      width='96%'
      spacing='-7px'
    >
      {!formula ? '' : formula}
    </Formula>
  );
};

export default FormulaScreen;
