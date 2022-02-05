import React from "react";
import Ripple from "./react-waves-effect";
import "./react-waves-effect/ripple.css";

function App() {
  return (
    <div className="App">
      <Ripple
        color="yellow"
        endWidth="400px"
        endHeight="400px"
        animationDuration={800}
        animationEasing="ease-out"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <div
          style={{
            width: "200px",
            height: "50px",
            background: "black",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          React Waves Effect
        </div>
      </Ripple>
      
      <br />
      
      <Ripple
        color="yellow"
        endWidth="400px"
        endHeight="400px"
        animationDuration={800}
        animationEasing="ease-out"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <div
          style={{
            width: "200px",
            height: "250px",
            background: "black",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          React Waves Effect
        </div>
      </Ripple>
    </div>
  );
}

export default App;
