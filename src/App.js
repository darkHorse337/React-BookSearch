import React from "react";
import "./App.css";
import SearchBar from "./components/searchbar";
import BookData from './data.json';

function App() {
  return (
    <div className="App">
      
        <SearchBar placeholder="Enter book title " data={BookData} />
      </div>
  );
}

export default App;
