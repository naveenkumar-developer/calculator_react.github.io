import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [result,setResult]=useState("");
  
  function appendToResult(value) {
    setResult(result + value);
  }
  
  function clearResult() {
    setResult("");
  }
  
  function calculateResult() {
    const operatorIndex = result.search(/[-+*%/]/);
    if (operatorIndex === -1) {
      alert("Invalid expression");
      return;
    }
    const operator = result.charAt(operatorIndex);
    const operands = result.split(operator);
    if (operands.length !== 2) {
      alert("Invalid expression");
      return;
    }
    const operand1 = parseFloat(operands[0]);
    const operand2 = parseFloat(operands[1]);
    if (isNaN(operand1) || isNaN(operand2)) {
      alert("Invalid expression");
      return;
    }
    let resultValue;
    switch (operator) {
      case "+":
        resultValue = operand1 + operand2;
        break;
      case "-":
        resultValue = operand1 - operand2;
        break;
      case "*":
        resultValue = operand1 * operand2;
        break;
      case "/":
        resultValue = operand1 / operand2;
        break;
      case "%":
        resultValue = operand1 % operand2;
        break;
      default:
        alert("Invalid expression");
        return;
    }
    setResult(resultValue.toString());
  }
  
  return (
    <div id="calculator-container">
      <input type="text" id="result" className="display" value={result} readOnly /><br />
      <button type="button" value="C" className="oprator box" onClick={clearResult}>C</button>
      <button type="button" value="/" className="oprator box" onClick={() => appendToResult('/')}>/</button>
      <button type="button" value="%" className="oprator box" onClick={() => appendToResult('%')}>%</button>
      <button type="button" value="*" className="oprator box" onClick={() => appendToResult('*')}>*</button>
      <button type="button" value="7" className="number box" onClick={() => appendToResult('7')}>7</button>
      <button type="button" value="8" className="number box" onClick={() => appendToResult('8')}>8</button>
      <button type="button" value="9" className="number box" onClick={() => appendToResult('9')}>9</button>
      <button type="button" value="-" className="oprator box" onClick={() => appendToResult('-')}>-</button>
      <button type="button" value="4" className="number box" onClick={() => appendToResult('4')}>4</button>
      <button type="button" value="5" class="number box" onClick={() => appendToResult('5')}>5</button>
        <button type="button" value="6" class="number box" onClick={() => appendToResult('6')}>6</button>
        <button type="button" value="+" class="oprator box" onClick={() => appendToResult('+')}>+</button>
        <button type="button" value="1" class="number box" onClick={() => appendToResult('1')}>1</button>
        <button type="button" value="2" class="number box" onClick={() => appendToResult('2')}>2</button>
        <button type="button" value="3" class="number box" onClick={() => appendToResult('3')}>3</button>
        <button type="button" value="." class="oprator box" onClick={() => appendToResult('.')}><b>.</b></button>
        <button type="button" value="00" class="number box" onClick={() => appendToResult('00')}>00</button>
        <button type="button" value="0" class="number box" onClick={() => appendToResult('0')}>0</button>
        <button type="button" value="=" class="oprator equal box" onClick={ calculateResult}>=</button>
    </div>
  )
}
export default Calculator;