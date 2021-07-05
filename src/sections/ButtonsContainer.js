import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledButtonsContainer = styled.div`
  width: 85%;
  height: calc(75% - 15px);
  padding-bottom: 10px;
  display: grid;
  margin-left: 5px;
  margin-right: 5px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);
`;

// const StyledButtonsContainerBox = styled.div`
//   width: 100%;
//   height: 100%;
// `;


const ButtonsContainer = (props) => {
  const {
    clear,
    operator,
    digit,
    decimal,
    calculate,
    negative
  } = props;

  return (
    <StyledButtonsContainer>
      {/* row one start */}
      <Button
        val='C'
        btncolor='#b2ff00'
        textcolor='rgb(9,11,23)'
        border='#94D400'
        hover='#FF3355'
        group='utility-btn'
        action={clear}
      />
      <Button
        val='+/-'
        btncolor='#b2ff00'
        textcolor='rgb(9,11,23)'
        border='#94D400'
        hover='#FF3355'
        group='utility-btn'
        action={negative}
      />
      <Button
        val='%'
        btncolor='#b2ff00'
        textcolor='rgb(9,11,23)'
        border='#94D400'
        hover='#FF3355'
        group='utility-btn'
        // action={}
      />
      <Button
        val='/'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        border='#00D68F'
        hover='#736BFB'
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
        border='#00D68F'
        hover='#736BFB'
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
        border='#00D68F'
        hover='#736BFB'
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
        border='#00D68F'
        hover='#736BFB'
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
        border='#00D68F'
        hover='#736BFB'
        group='action-btn'
        action={calculate}
      />
    </StyledButtonsContainer>
  );
};

export default ButtonsContainer;
