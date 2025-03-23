import { useState } from 'react';
 export default function Call () {

     const [count,setcount]= useState(0);
      
     const six = () => {
          setcount (count + 6);
     };
     const four= () => {
          setcount (count + 4);
     };
     const single = () => {
          setcount (count + 1);
     };
    
     const run = () => {
          setcount (50);
          if (count >= 50) {
               
          }
     };

     const callStyle ={
          backgroundColor: "red",
          padding: "10px",
          borderRadius: "5px",
     };
     return (
          <div style={callStyle}>
               <h2></h2>
               <h1>Call: {count}</h1>
               <button onClick={six}>6</button>
               <button onClick={four}>4</button>
               <button onClick={single}>1</button>
          </div>
     );

};