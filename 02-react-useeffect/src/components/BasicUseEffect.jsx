import { useEffect, useState } from 'react';

export const BasicUseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        },1000);
        
    },[count]);
  return (
    <div>
        <h1>Basic UseEffect</h1>
        <p>render count: {count}
        </p>
    </div>
  )
}
