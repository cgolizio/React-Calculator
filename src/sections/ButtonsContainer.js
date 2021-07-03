import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledButtonsContainer = styled.div`
  width: 100%;
  height: 75%;
  background: ghostwhite;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);
`;

const ButtonsContainer = (props) => {

  return (
    <StyledButtonsContainer>
      {/* row one start */}
      <Button
        val='C'
        btncolor='silver'
        textcolor='rgb(9,11,23)'
        group='utility-btn'
      />
      <Button
        val='+/-'
        btncolor='silver'
        textcolor='rgb(9,11,23)'
        group='utility-btn'
      />
      <Button
        val='%'
        btncolor='silver'
        textcolor='rgb(9,11,23)'
        group='utility-btn'
      />
      <Button
        val='/'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
      />
      {/* row two start */}
      <Button
        val='7'
        group='number-btn'
      />
      <Button
        val='8'
        group='number-btn'
      />
      <Button
        val='9'
        group='number-btn'
      />
      <Button
        val='x'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
      />
      {/* row three start */}
      <Button
        val='4'
        group='number-btn'
      />
      <Button
        val='5'
        group='number-btn'
      />
      <Button
        val='6'
        group='number-btn'
      />
      <Button
        val='-'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
      />
      {/* row four start */}
      <Button
        val='1'
        group='number-btn'
      />
      <Button
        val='2'
        group='number-btn'
      />
      <Button
        val='3'
        group='number-btn'
      />
      <Button
        val='+'
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
      />
      {/* row five start */}
      <Button
        val='0'
        colorigin='1'
        colend='3'
        group='number-btn'
      />
      <Button
        val='.'
        origin='3'
        group='utility-btn'
      />
      <Button
        val='='
        btncolor='#0fa'
        textcolor='rgb(9,11,23)'
        group='action-btn'
      />
    </StyledButtonsContainer>
  );
};

export default ButtonsContainer;
