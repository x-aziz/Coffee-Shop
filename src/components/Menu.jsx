import React from 'react'
export default function Menu({items}) {
 
  return (
    <div >
    <h2>Menu :</h2>
    <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  </div>
  );
}
// ()=> is function without arguments and name 
// setX should be inside function always