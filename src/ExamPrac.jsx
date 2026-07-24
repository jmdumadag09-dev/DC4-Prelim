import {useState} from "react";


function ExamPrac(){
    const [count, setCount] =useState(0);
    const increment = () => setCount(count+1);
    const decrement =  () => setCount(count-1);
    const reset = ()=> setCount(0);

    return(
        <p>Count:{count}</p>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
                <button onClick={reset}>Reset</button>


    )
}