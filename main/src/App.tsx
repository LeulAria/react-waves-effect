import React from "react";
import Ripple from "react-waves-effect";

function App() {
  return (
    <div className="App">
      <Ripple
        color="yellow"
        endHeight="200px"
        endWidth="200px"
        animationDuration={700}
        animationEasing="ease-out"
      >
        <div
          style={{
            width: "300px",
            maxWidth: "300px",
            height: "300px",
            background: "black",
          }}
        ></div>
      </Ripple>
    </div>
  );
}

export default App;