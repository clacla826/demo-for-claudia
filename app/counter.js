import React from 'react'

const Counter = ({increment, count}) => {

  return (
    <div id="container">
      <div id='navbar'>
        Counter.js
      </div>
      <div id='counter'>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

export default Counter
