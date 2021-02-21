import React from "react";
import "./index.css";
import { useState } from "react";

export default function Calculator() {
  const [numOper, setOper] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator,setOperator] = useState('');
  const [result, setResult] = useState('');


  function calculateResult(e) {
    let opr = e.target.textContent
    setOperator(opr); 
    let in1 = Number(num1);
    let in2 = Number(num2);
    let output = 0;
    if(opr === "+")
      output = in1 + in2
    else if(opr === "-")
      output = in1 - in2;
    else if(opr === "*")
      output = in1 * in2;
    else if(opr === "/")
      output = (in1 / in2).toFixed(3);
    setResult(output);
    setOper(numOper => numOper + 1);
  }

  function resetScreen() {
    setOperator('');
    setNum1('');
    setNum2('');
    setResult('');
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total number of operations : {numOper}</div>
      <div className="card">
        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                  name="input1" value={num1} onChange = {e => setNum1(e.target.value)}/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operator}</label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                  placeholder="Eg: 2" value={num2} onChange={e => setNum2(e.target.value)}/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={calculateResult}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={calculateResult}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={calculateResult}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={calculateResult}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={resetScreen}>Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div data-testid="result" className="result-value ma-0 slide-up-fade-in">{result ? `Result = ${result}` : ""}</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}