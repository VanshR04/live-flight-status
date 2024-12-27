import React from "react";
import "./Status.css";

function Status({ status }) {
  const parts = status.split(" ");
  const mainStatus = parts[0];
  const subStatus = parts.slice(1).join(" ");

  return (
    <div className="status-card">
      <p>{mainStatus}</p>
      <p>{subStatus}</p>
    </div>
  );
}

export default Status;
