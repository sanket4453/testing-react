import { useState } from "react"


export const useCounter = (initialcount = 0) => {
    const [ count, setCount] = useState(initialcount);
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return { count, increment, decrement}
}