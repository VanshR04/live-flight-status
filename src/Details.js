import React from "react";
import "./Details.css";
import Status from "./Status";

function Details({ flight }) {
  if (!flight) {
    return null; // Return nothing if flight is null
  }

  return (
    <div className="flight-details">
      <div className="header">
        <div>
        <h1>{flight.flight.iata}</h1>
        <p>{flight.airline.name} ({flight.airline.iata})</p>
        </div>
        <Status status={flight.flight_status} />
      </div>
      <div className="info-grid">
        {/* Departure Section */}
        <div className="info-section">
          <h2>Departure</h2>
          <p>{flight.departure.airport}</p>
          <p>{flight.departure.iata} • {flight.departure.icao}</p>
          <p>Scheduled: {new Date(flight.departure.scheduled).toLocaleString()}</p>
          <p>Estimated: {new Date(flight.departure.estimated).toLocaleString()}</p>
          <p>Terminal: {flight.departure.terminal || "N/A"}</p>
          <p>Gate: {flight.departure.gate || "N/A"}</p>
        </div>

        {/* Arrival Section */}
        <div className="info-section">
          <h2>Arrival</h2>
          <p>{flight.arrival.airport}</p>
          <p>{flight.arrival.iata} • {flight.arrival.icao}</p>
          <p>Scheduled: {new Date(flight.arrival.scheduled).toLocaleString()}</p>
          <p>Estimated: {new Date(flight.arrival.estimated).toLocaleString()}</p>
          <p>Terminal: {flight.arrival.terminal || "N/A"}</p>
          <p>Gate: {flight.arrival.gate || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
