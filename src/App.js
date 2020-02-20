import React from "react";
import PhotoCardContainer from "./components/PhotoCardContainer"
import "./App.css";

function App() {
 
  return (
    <div className="App">
      <div>
        <h1>Nasa Photo Of the Day</h1>
        <PhotoCardContainer />
      </div>
    </div>
  );
}

export default App;
