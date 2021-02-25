import React from 'react';
import Counter from './CounterLogic';

export default() =>{
    const {counterVal, incrementCounter} = Counter();
    
    return( <div className="Counter">
    <button onClick = {()=>incrementCounter()}>Increments</button>
        <h4>{counterVal}</h4>
    </div>);
}