import  {useState} from 'react';

const Counter = ()=>{
    const  [counterVal, setCounterVal] = useState(0);
    const incrementCounter = () =>{
        setCounterVal(counterVal + 1);
    }
    return {counterVal, incrementCounter}
}

export default Counter;