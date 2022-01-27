import React, { useState } from 'react'
import { Ripple } from './react-waves-effect';
// import { Ripple } from '../../lib'
// import { Ripple } from './lib'

function App() {
  return (
    <div className="App">
      <Ripple
        color="yellow"
        animationDuration={700}
        endHeight='200px'
        endWidth='200px'
        animationEasing='ease-out'
      >
        <div
          style={{
            width: "300px",
            maxWidth: "300px",
            height: "300px",
            background: 'black'
          }}
        ></div>
      </Ripple>
    </div>
  )
}

export default App