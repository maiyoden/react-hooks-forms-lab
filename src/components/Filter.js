// src/components/Filter.js
import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search items..."
        value={search} // Make this a controlled input
        onChange={(e) => onSearchChange(e.target.value)} // Update state on change
      />
    </div>
  );
}

export default Filter;