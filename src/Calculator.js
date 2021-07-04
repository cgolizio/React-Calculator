import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonsContainer from './sections/ButtonsContainer';
import Screens from './sections/Screen/Screens';

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
  const [ formula, setFormula ] = useState('');
  const [ currentVal, setCurrentVal ] = useState('0');
  const [ havePrevCalc, setHavePrevCalc ] = useState(false);
  const [ tempFormulaDisplay, setTempFormulaDisplay ] = useState('');

  const endsWithOperator = /[*+-/]$/;
  const containsDecimal = /[.]/;

  const handleMemoryClear = () => {
    setFormula('');
    setCurrentVal('0')
    setHavePrevCalc(false);
    setTempFormulaDisplay('');
  };

  const handleOperator = e => {
    const { value } = e.target;
    let prev = formula;
    if (havePrevCalc) {
      setHavePrevCalc(false);
      prev = currentVal;
      setTempFormulaDisplay(currentVal + value);
    }

    if (endsWithOperator.test(formula)) {
      setFormula(formula.slice(0, -1) + value)
    } else {
      setFormula(prev + value);
    }

    setCurrentVal('');
  };

  const handleDigit = e => {
    const { value } = e.target;
    if (havePrevCalc) {
      setHavePrevCalc(false);
      setCurrentVal(value);
      setFormula('' + value);
    } else {
      if (currentVal === '0') {
        setCurrentVal('' + value)
      } else {
        setCurrentVal(currentVal + value);
      }
      setFormula(formula + value);
    }
  };

  const handleDecimal = e => {
    if (!containsDecimal.test(currentVal)) {
      setCurrentVal(currentVal + '.');
      setFormula(formula + '.');
    }
  };

  const handleCalculation = e => {
    let exp = formula;

    if (endsWithOperator.test(exp)) {
      exp = exp.slice(0, -1);
    }

    let answer;
    try {
      answer = Math.round(1000000000000 * eval(exp)) / 1000000000000;
      setFormula(formula + ' = ' + answer);
    } catch (err) {
      setTempFormulaDisplay('ERR');
    }

    setFormula('');
    setCurrentVal(answer);
    setHavePrevCalc(true);

  };

  return (
    <StyledCalculator>

      <Screens
        formula={ setHavePrevCalc ? tempFormulaDisplay : formula }
        show={currentVal}
      />

      <ButtonsContainer
        clear={handleMemoryClear}
        operator={handleOperator}
        digit={handleDigit}
        decimal={handleDecimal}
        calculate={handleCalculation}
      />

    </StyledCalculator>
  );
};

export default Calculator;
