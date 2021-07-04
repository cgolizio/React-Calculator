import React from 'react';
import styled from 'styled-components';
import { StyledReadout } from '../../components/styled-components/Readout';

const MainScreen = ({ show }) => {
  return (
    <StyledReadout>
      {show}
    </StyledReadout>
  );
};

export default MainScreen;
