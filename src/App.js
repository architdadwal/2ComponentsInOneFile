import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Copy />
    </div>
  );
}
function Copy() {
  return (
    <div>
      {" "}
      <p> They are our friends </p>{" "}
    </div>
  );
}
export default App;
