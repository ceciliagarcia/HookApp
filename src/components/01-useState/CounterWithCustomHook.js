import React from 'react';
import './counter.css';

import {useCounter} from '../../hooks/useCounter';
export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr/>

            <button onClick={increment} className="btn">+ 1</button>
            <button onClick={reset} className="btn"> Reset</button>
            <button onClick={decrement} className="btn"> - 1</button>
        </>
    )
}
