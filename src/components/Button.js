import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  text-align: center;
  height: auto;
  width: auto;
  font-size: 8rem;
  border-radius: 25px;
  margin: 1px;
  font-family: 'Poiret One', cursive;

  // ** dynamic properties ** //
  color: ${props => props.textcolor || 'ghostwhite'};
  background: ${props => props.btncolor || '#736BFB'};
  grid-column-end: ${props => props.colend || 'auto'};
  grid-column-start: ${props => props.colorigin || 'auto'};
  border-bottom: 15px outset ${props => props.border || '#645DDB'};
  :hover {
    font-size: 10rem;
    color: ${props => props.hover || '#0fa'};
    cursor: pointer;
  }
  :active {
    color: #150080;
    cursor: grabbing;
    background: #b2ff00;
    transform: scale(.95);
    border-bottom: 5px outset ${props => props.border || '#645DDB'}
  }
`;

const Button = (props) => {
  const {
      val,
      group,
      btncolor,
      textcolor,
      border,
      hover,
      colorigin,
      colend,
      action,
    } = props;

  return (
    <StyledButton
      className={group}
      btncolor={btncolor}
      textcolor={textcolor}
      border={border}
      hover={hover}
      colorigin={colorigin}
      colend={colend}
      value={ val ? val : '*' }
      onClick={action}
    >
      { val ? val : 'x' }
    </StyledButton>
  );
};

export default Button;