import React from "react";
import "./Avatar.css";
function Avatar({ handleClick, currentAvatar }) {
  return (
    <button className="Avatar" onClick={handleClick}>
      <img
        src={require(`../../assets/${currentAvatar.src}`)}
        className="Avatar-img"
        alt={`MainAvatar: ${currentAvatar.label}`}
      />
    </button>
  );
}

export default Avatar;
