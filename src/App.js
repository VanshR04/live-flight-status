import React, { useState } from "react";
import Search from "./Search";
import Details from "./Details";
import "./App.css";

function App() {
  const [flightData, setFlightData] = useState(null);
  const [found, setFound] = useState(false)

  async function handleSearch(number) {
    try {
      const response = await fetch(
        `https://api.aviationstack.com/v1/flights?access_key=ebf3238cdfcd4e17ba5bc0689ddfcce9&flight_iata=${number}`
      )
      const data = await response.json()
      if (data.data && data.data.length > 0) {
        setFlightData(data.data[0]); // Use the first result
        setFound(true)
        console.log(data.data[0]);
        
      } else {
        setFlightData(null); // No data found
      }
    }
    catch(error){
      console.log(error);
      setFlightData(null)
      
    }
  }
    

  return (
      <div className="app">
        <Search onSearch={handleSearch} />
        {found && flightData && <Details flight={flightData} />}
        {!found && (
          <div className="no-data">
            No data found
          </div>
        )}
      </div>
    );
  }

  export default App;
