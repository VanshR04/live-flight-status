import React, { useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [flightNumber, setFlightNumber] = useState("");

  function handleInputChange(e) {
    setFlightNumber(e.target.value);
  }

  function handleSearchClick() {
    if (flightNumber.trim() === "") {
      alert("Please enter a flight number");
      return;
    }

    onSearch(flightNumber); // Pass the flight number to the parent component (App.js)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="e.g. KL9559"
        value={flightNumber}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search Flight</button>
    </div>
  );
}

export default Search;
