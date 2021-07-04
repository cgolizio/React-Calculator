import React from 'react';
import styled from 'styled-components';
import FormulaScreen from './FormulaScreen';
import MainScreen from './MainScreen';

const StyledScreen = styled.div`
  width: 93.5%;
  height: calc(25% - 10px);
  background: rgb(9,11,23);
  color: orange;
  font-family: 'Bungee Hairline', cursive;
  border-radius: 50px;
  border: 15px inset #7D7D7D;
  margin-top: 6px;
  margin-bottom: 4px;
  overflow: hidden;
`;

const Screens = ({ formula, show }) => {
  return (
    <StyledScreen>

      <FormulaScreen formula={formula} />

      <MainScreen show={show} />

    </StyledScreen>
  );
};

export default Screens;
