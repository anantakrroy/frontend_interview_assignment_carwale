import React  from 'react';
import './App.css';
import 'h8k-components';
import Calculator from '././components/calculator/Calculator.js';

const title = "Calculator";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <Calculator/>
    </div>
  );
}

export default App;
