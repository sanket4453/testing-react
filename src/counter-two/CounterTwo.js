import React, { useState } from 'react'

const CounterTwo = ({initialcount, increment, decrement}) => {

    const [count, setCount] = useState(initialcount)

    if(increment){
        
    }
    if(decrement){
        
    }
  return (
    <div>
        {count}

        <button onClick={increment(() => setCount(count+1))}>Increment</button>
        <button onClick={decrement(() => setCount(count-1))}>Decrement</button>
    </div>
  )
}

export default CounterTwo