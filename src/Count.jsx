import { useState } from "react";

export default function Counter () {
     const [count,setcount ]= useState(0);
     const newcount = (newCount) => {
        setcount(newCount);
     };
     const increment = () => {
        setcount(count + 1);
     };
     const decrement = () => {
        setcount(count - 1);
     };
     const reset = () => {
        setcount(0);
     };

     const CounterStyle = {
          backgroundColor: "lightblue",
          padding: "10px",
          borderRadius: "5px",
          
       };
     return (
        <div style={CounterStyle}>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button> 
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
     );
     // CSS styles for the counter component
     // You can customize these styles as per your design
     // For example:
     // You can use CSS classes or inline styles
     // Example of inline styles
    

}