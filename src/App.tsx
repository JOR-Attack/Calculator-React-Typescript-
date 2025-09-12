import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [buttons, setButtons] = useState<string[]>([
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ]);
  // const [valueCurrent, setCurrent] = useState("");

  // setInput("Hola mundo");

  function handleClick(e: any, value: string) {
    if (value === "=") {
      try {
        const expression = input.replace("x", "*").replace("÷", "/");

        if (/[\+\-\*\/.]$/.test(expression)) {
          setInput("Error");
          return;
        }

        const result = eval(expression);

        if (result === Infinity || result === -Infinity || isNaN(result)) {
          setInput("Error");
        } else {
          setInput(result.toString());
        }
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "Ult") {
      setInput(input.substring(0, input.length - 1));
    } else {
      const lastChar = input[input.length - 1];
      const operators = ["+", "-", "*", "/", "x", "÷"];

      if (operators.includes(value) && operators.includes(lastChar)) {
        return;
      }

      if (input === "" && ["+", "*", "/", "x", "÷"].includes(value)) {
        return;
      }

      if (input === "Error") {
        setInput(value);
      } else {
        setInput((prev) => prev + value);
      }
    }
  }

  function MyButton(values: string[]) {
    return;
  }

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 bg-gray-100 rounded-xl shadow-lg font-sans">
      <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
        Calculator
      </h1>

      {/* Display */}
      <div className="w-full h-16 bg-gray-800 text-white text-2xl flex items-center justify-end px-4 rounded-lg mb-4 overflow-hidden">
        <span className="truncate">{input || "0"}</span>
      </div>

      {/* Clear and Delete buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={(e) => handleClick(e, "C")}
          className="py-4 px-6 text-lg font-semibold border-none rounded-lg bg-red-500 text-white cursor-pointer transition-colors duration-200 hover:bg-red-600"
        >
          C
        </button>
        <button
          onClick={(e) => handleClick(e, "Borrar")}
          className="py-4 px-6 text-lg font-semibold border-none rounded-lg bg-orange-500 text-white cursor-pointer transition-colors duration-200 hover:bg-orange-600"
        >
          ⌫
        </button>
      </div>

      {/* Number and operator buttons */}
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((value, i) => {
          const isOperator = ["÷", "x", "-", "+", "="].includes(value);
          return (
            <button
              key={i}
              onClick={(e) => handleClick(e, value)}
              className={`py-5 px-4 text-xl font-bold border-none rounded-lg cursor-pointer transition-colors duration-200 ${
                isOperator
                  ? "bg-blue-400 text-white hover:bg-blue-500"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
