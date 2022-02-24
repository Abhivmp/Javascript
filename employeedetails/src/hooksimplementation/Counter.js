import { useState } from "react";

export default function Counter() {
    var [counter, setCounter] = useState(0);

    debugger;


        setTimeout(() => {
            setCounter(counter + 1);
        console.log(counter)
          }, 1000);


    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            
        </div>
    )
}