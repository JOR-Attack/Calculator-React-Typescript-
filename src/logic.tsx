// function logic(){
//     function evaluar(value: string) {
//     const expression = input.replace("x", "*").replace("÷", "/");
//     switch (value === "=") {
//       case /[\+\-\*\/.]$/.test(expression):
//         {
//           setInput("Error");
//           break;
//         }
//       case

//     }

//     if (value === "=") {
//       try {
//         if (/[\+\-\*\/.]$/.test(expression)) {
//           setInput("Error");
//           return;
//         }

//         const result = eval(expression);

//         if (result === Infinity || result === -Infinity || isNaN(result)) {
//           setInput("Error");
//         } else {
//           setInput(result.toString());
//         }
//       } catch {
//         setInput("Error");
//       }
//     }

//     function handleClick(value: string) {
//       evaluar(value);
//       if (value === "C") {
//         setInput("");
//       } else if (value === "Ult") {
//         setInput(input.substring(0, input.length - 1));
//       } else {
//         const lastChar = input[input.length - 1];
//         const operators = ["+", "-", "*", "/", "x", "÷"];

//         if (operators.includes(value) && operators.includes(lastChar)) {
//           return;
//         }

//         if (input === "" && ["+", "*", "/", "x", "÷"].includes(value)) {
//           return;
//         }

//         if (input === "Error") {
//           setInput(value);
//         } else {
//           setInput((prev) => prev + value);
//         }
//       }
//     }

//     function MyButton(values: string[]) {
//       return values.map((value, i) => (
//         <button className="btn" key={i} onClick={() => handleClick(value)}>
//           {value}
//         </button>
//       ));
//     }
// }
