import { useState } from "react"
function Typedata() {
const [brand, setBrand]=useState("BMW");
const [model, setModel]=useState("X5");
const [year, setYear] =useState (2022);
const [color, setColor]=useState("red");

const setFord = (e) => {
  e.preventDefault();
  setBrand("Ford");
  setModel("Mustang");
  setYear(1969);
  setColor("blue");
}
const setBMW = (e) => {
  e.preventDefault();
  setBrand("BMW");
  setModel("X5");
  setYear(2022);
  setColor("red");
}

  return (
    <>
    <h1>by {brand} {model} {year} {color}</h1>
    <button type="button" onClick={setFord}>Ford</button> 
    <button type="button" onClick={setBMW}>BMW</button>
    </>
  )
}

export default Typedata