import React from 'react';

const Counter = ({ sum, setSum, removeCounter }) => {
    const updateCounter = (value) => {
        if (sum + value >= 0) {
            setSum(sum + value);
        }
    };

    return (
        <div className='counter'>
            <button onClick={() => updateCounter(-1)}> - </button>
            <h3>{sum}</h3>
            <button onClick={() => updateCounter(1)}> + </button>
            <button onClick={() => setSum(0)}> C </button>
            <button onClick={() => removeCounter()}> X </button>
        </div>
    )
}

export default Counter;