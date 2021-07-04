import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledButtonsContainer = styled.div`
  width: 95%;
  height: calc(75% - 5px);
  display: grid;
  margin-left: 5px;
  margin-right: 5px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);
`;


const ButtonsContainer = (props) => {
  const {
    clear,
    operator,
    digit,
    decimal,
    calculate,
    // handleMemoryClear,
    // handleOperator,
    // handleDigit,
    // handleDecimal,
    // handleCalculation
  } = props;

  return (
    <StyledButtonsContainer>
      {/* row one start */}
      <Button
        val='C'
        btncolor='silver'
        textcolor='rgb(9,11,23)'
        group='utility-btn'
        action={clear}
      />
      <Button
        val='+/-'
        btncolor='silver'
        textcolor='rgb(9,11,23)'
        group='utility-btn'
        // action={}
      />
      <Button
        val='%'
        btncolor='silver'
        textcolor='rgb(9,11,23)'
        group='utility-btn'
        // action={}
      />
      <Button
        val='/'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
        action={operator}
      />
      {/* row two start */}
      <Button
        val='7'
        group='number-btn'
        action={digit}
      />
      <Button
        val='8'
        group='number-btn'
        action={digit}
      />
      <Button
        val='9'
        group='number-btn'
        action={digit}
      />
      <Button
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
        action={operator}
      />
      {/* row three start */}
      <Button
        val='4'
        group='number-btn'
        action={digit}
      />
      <Button
        val='5'
        group='number-btn'
        action={digit}
      />
      <Button
        val='6'
        group='number-btn'
        action={digit}
      />
      <Button
        val='-'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
        action={operator}
      />
      {/* row four start */}
      <Button
        val='1'
        group='number-btn'
        action={digit}
      />
      <Button
        val='2'
        group='number-btn'
        action={digit}
      />
      <Button
        val='3'
        group='number-btn'
        action={digit}
      />
      <Button
        val='+'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
        action={operator}
      />
      {/* row five start */}
      <Button
        val='0'
        colorigin='1'
        colend='3'
        group='number-btn'
        action={digit}
      />
      <Button
        val='.'
        origin='3'
        group='utility-btn'
        action={decimal}
      />
      <Button
        val='='
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
        action={calculate}
      />
    </StyledButtonsContainer>
  );
};

export default ButtonsContainer;
