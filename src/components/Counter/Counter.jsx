import React, { useState } from 'react';
import Forma from '../Forms/Forma';
import Forms from '../Forms/Forms';
import { useRef } from 'react';
import Timer from './Timer';
import Video from './Video';

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  
  console.log('Component updated');


  const decrement = () => { 
    setCount(count - 1);
  }

  const increment = () => {
    /*setCount(count + 1);  // 0 + 1
    setCount(count + 1);  // 0 + 1
    setCount(count + 1);  // 0 + 1*/
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    
  };

  const handleClick = () => { 
    ref.current = ref.current + 1;
    alert(ref.current)
  }



  return (
    <div>
      <div>
        <button onClick={() => { decrement() }}>-</button>
        <span>{ count }</span>
        <button onClick={() => { increment() }}>+</button>
      </div>

      <hr />

      <button onClick={handleClick}>Click me</button>

      <hr />

      <Timer />
      <hr />

      <Video />

      <Forma />

      <Forms />

    </div>
  );
}

export default Counter;
