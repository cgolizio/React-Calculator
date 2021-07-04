import styled from 'styled-components';

export const StyledReadout = styled.div`
  width: ${props => props.width || '97%'};
  height: ${props => props.height || '75%'};
  font-size: ${props => props.size || '17rem'};
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  letter-spacing: ${props => props.spacing || '-55px'};
`;
