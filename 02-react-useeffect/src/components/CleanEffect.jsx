import { useEffect } from "react";
import { useState } from "react";


export const CleanEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        },1000);
        return ()=> clearTimeout(timer);
    },[]);
  return (
    <>
    <h1>CleanEffect</h1>
    <p>i have rendered {count}</p>
    </>
    
    
  )
}
