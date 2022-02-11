import Display from "./components/display"
import Buttons from "./components/buttons"
import "./App.css"
import {useState} from "react";


function App() {
  const [result, setResult] = useState("");

  const newResult = (num) => {
    setResult(result + num)
  }
  const clearResult = () => {
    setResult("")
  }
  const clearEntry = () => {
    setResult(result.slice(0, -1))
  }
  const evaluate = () => {
    setResult(eval(result));
  }
  return (
    <div className="container">
      <h1>Basic Calculator</h1>
      <Display result={result} /> 
      <Buttons newResult={newResult} clear={clearResult} clearEntry={clearEntry} evaluate={evaluate}  />
    </div>
  );
}

export default App;
