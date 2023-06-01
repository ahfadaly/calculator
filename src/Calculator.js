import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="form">
        <input placeholder="0" type="text" defaultValue={result} />
        <span className="input-border"></span>
      </div>
      <div className="keypad-calculator">
        <div className="keypad">
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
        </div>
        <div className="keypad">
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
        </div>
        <div className="keypad">
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="%" onClick={handleClick}>
            %
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
        </div>
        <div className="clear-equal">
          <button id="clear" onClick={clear}>
            Clear
          </button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
