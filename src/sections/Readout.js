import React, { useState } from 'react';
import styled from 'styled-components';

const StyledReadout = styled.div`
  width: 100%;
  height: 25%;
  background: rgb(9,11,23);
  color: orange;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: stretch;
  font-size: ${props => props.size || '20rem'};
`;

const Readout = (props) => {

  return (
    <StyledReadout>
    </StyledReadout>
  );
};

export default Readout;