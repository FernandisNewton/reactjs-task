import React, { useState } from "react";
import "./Popup.css";
function Popup({ avatarList, closePopup }) {
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);
  const [avatarSelected, setAvatarSelected] = useState(-1);

  const handleAvatarListItemClick = (e, i) => {
    console.log("Inside handleAvatarListItemClick");
    if (i !== 0) {
      console.log("handle", i);
      setAvatarSelected(i);
      setIsAvatarSelected(true);
      setTimeout(() => closePopup(i), 1000);
    }
  };
  const getClassname = (i) => {
     if (isAvatarSelected && avatarSelected === i) {
      return "Loading";
    } else {
      return "Default";
    }
  };
  const handleEnterKeyPress =
    (onClick) =>
    ({ key }) => {
      if (key === "Enter") {
        onClick();
      }
    };
  const getAvatar = ({ src, label }, i) => (
    <li
      key={label}
      className={getClassname(i)}
      onClick={(e) => handleAvatarListItemClick(e, i)}
      onKeyPress={handleEnterKeyPress((e) => handleAvatarListItemClick(e, i))}
      tabIndex={0}
    >
      <img
        src={require(`../../assets/${src}`)}
        className="Avatars"
        alt={label}
        
      />
    </li>
  );
  return (
    <div className={"Popover-container"}>
      <div className="Triangle" />
      <div className="Popover">
        <div className="Choose-avatar-text">{"Choose your avatar"}</div>
        <ul className="Avatar-list-container">
          {avatarList.map(({ src, label }, i) => getAvatar({ src, label }, i))}
        </ul>
      </div>
    </div>
  );
}

export default Popup;