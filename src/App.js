import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    if ((key >= "0" && key <= "9") || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
      setDisplay(display + key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      handleDelete();
    } else if (key === "Escape") {
      handleClear();
    }
  };

  return (
    <div className="container1 d-flex flex-column justify-content-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="calculator">
              <div className="display">
                <input
                  type="text"
                  value={display}
                  onKeyDown={handleKeyDown}
                  readOnly
                  autoFocus
                />
              </div>
              <div className="col-12">
                <button onClick={handleClear} className="operator">
                  AC
                </button>
                <button onClick={handleDelete} className="operator">
                  DEL
                </button>
                <button onClick={() => handleClick(".")} className="operator">
                  .
                </button>
                <button onClick={() => handleClick("/")} className="operator">
                  /
                </button>
              </div>
              <div className="col-12">
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("*")} className="operator">
                  *
                </button>
              </div>
              <div className="col-12">
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")} className="operator">
                  -
                </button>
              </div>
              <div className="col-12">
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("+")} className="operator">
                  +
                </button>
              </div>
              <div className="col-12">
                <button onClick={() => handleClick("00")}>00</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={calculate} className="equal operator">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
