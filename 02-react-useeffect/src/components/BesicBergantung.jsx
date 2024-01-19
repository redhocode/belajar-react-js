import { useEffect, useState } from "react";

export const BesicBergantung = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(()=> count * 2);
    },[count]);

  return (
    <>
    <h1>Basic Bergantung atau bersyarat</h1>
    <p>Count : {count}</p>
    <button type="button" onClick={() => setCount(count + 1)}>+</button>
    <p>Calculation : {calculation}</p>
    </>
  )
}
