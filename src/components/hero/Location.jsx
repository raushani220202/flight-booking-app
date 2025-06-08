import React from 'react';
import{CiLocationOn} from "react-icons/ci";

function Location() {
  return (
    <div class="location">
      <div className="location-container">
        <div>
            <CiLocationOn  className="location-icon"/>
        </div>
        <div className="location-content">
            <label>Location</label>
            <input placeholder="where are you going?" />
        </div>
      </div>
    </div>
  );
}

export default Location
