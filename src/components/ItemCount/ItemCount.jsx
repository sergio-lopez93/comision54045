/* importamos el hook de useStates */
import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)
    console.log('render count')
    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount