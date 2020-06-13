import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Button from './components/Button';
import './App.css';

function App() {
  const [operation, setOperation] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const operationalBehaviour = (operation) => {
    if (inputValue === operation) return;
    setInputValue(operation);
    setOperation((state) => {
      state = state || [];
      if (['*', '/', '-', '+'].includes(state)) {
        return [...state, operation];
      }
      return [...state, inputValue.join(''), operation];
    });
  };

  const numericalBehaviour = (number) => {
    setInputValue((state) => {
      state = state || [];
      if (['*', '/', '-', '+'].includes(state)) {
        return [number];
      }
      if (String(state) === '0') {
        setOperation([]);
        return [number];
      }
      return [...state, number];
    });
  };

  const buttons = [
    {
      label: 'AC',
      handleClick() {
        setOperation([]);
        setInputValue([]);
      },
      id: 'AC',
    },
    {
      label: '/',
      handleClick() {
        operationalBehaviour('/');
      },
    },
    {
      label: '*',
      handleClick() {
        operationalBehaviour('*');
      },
    },
    {
      label: '7',
      handleClick() {
        numericalBehaviour('7');
      },
    },
    {
      label: '8',
      handleClick() {
        numericalBehaviour('8');
      },
    },
    {
      label: '9',
      handleClick() {
        numericalBehaviour('9');
      },
    },
    {
      label: '-',
      handleClick() {
        operationalBehaviour('-');
      },
    },
    {
      label: '4',
      handleClick() {
        numericalBehaviour('4');
      },
    },
    {
      label: '5',
      handleClick() {
        numericalBehaviour('5');
      },
    },
    {
      label: '6',
      handleClick() {
        numericalBehaviour('6');
      },
    },
    {
      label: '+',
      handleClick() {
        operationalBehaviour('+');
      },
    },
    {
      label: '1',
      handleClick() {
        numericalBehaviour('1');
      },
    },
    {
      label: '2',
      handleClick() {
        numericalBehaviour('2');
      },
    },
    {
      label: '3',
      handleClick() {
        numericalBehaviour('3');
      },
    },
    {
      label: '=',
      handleClick() {
        const result = evaluate([...operation, inputValue.join('')].join(''));

        setOperation((state) => [result]);
        setInputValue((state) => [result]);
      },
      id: 'equal',
    },
    {
      label: '0',
      handleClick() {
        numericalBehaviour('0');
      },
      id: 'zero',
    },
    {
      label: '.',
      handleClick() {
        if (String(inputValue).endsWith('.')) return; // prevent consecutive dots
        setInputValue((state) => {
          state = state || [];
          if (['*', '/', '-', '+'].includes(state) || state.length === 0) {
            // set it to 0.
            return [0, '.'];
          }
          return [...state, '.'];
        });
      },
      id: 'dot',
    },
  ];

  return (
    <div class="App">
      <div className="calculator">
        <div class="operation">{operation.join('')}</div>
        <input
          type="text"
          value={
            typeof inputValue === 'object' ? inputValue.join('') : inputValue
          }
        />
        <div class="buttonsWrapper">
          {buttons.map((button) => {
            return <Button {...button} />;
          })}
        </div>
      </div>
      <div class="signature">
        Designed and Coded By <br />{' '}
        <a href="https://github.com/harryadel">Harry Adel</a>
      </div>
    </div>
  );
}

export default App;
