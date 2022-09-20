import React from 'react';
import Calculator from './components/Calculator';
import InputStuff from './components/InputStuff';
import './style/App.css';

export default function App(){
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Homework!</p>
        <div>
          <Calculator />
          <InputStuff />
        </div>
      </header>
    </div>
  );
}

// propside kasutamine
// const Example = ({ name }) => <h1>Hello {name}</h1>
// fnc komponendi loomisel saab ka const Example = (props) => <h1>Hello {props.name}</h1>
// ... -> spread operator, loob koopia massiivist
// map -> fnc, mis loob massiivist koopia ja selle käigus saab erinevaid fncsid rakendada, samuti kasulik loendamisel sest map(element, index)
// filter -> fnc, mis loob "shallow copy" (refrence to same array values, not independant) massiivist, kuhu lähevad väärtused vastavalt tingimustele
