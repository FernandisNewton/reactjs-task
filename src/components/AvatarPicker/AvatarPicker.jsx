import React, { useState, useEffect, useRef } from "react";
import "./AvatarPicker.css";
import Avatar from "../Avatar/Avatar";
import Popup from "../Popup/Popup";
import avatarList from "../../avatarList";

function AvatarPicker() {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(avatarList[0]);
  
  const popup = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAvatarClick = () => {
    setIsPickerOpen(true);
  };
  const handleClickOutside = (event) => {
    if (popup.current && !popup.current.contains(event.target)) {
      setIsPickerOpen(false);
    }
  };
  const closeAvatarPicker = (index) => {
    console.log("index", index);
    setIsPickerOpen(false);
    setCurrentAvatar(avatarList[index]);
  };
  return (
    <div className="main-container" ref={popup}>
      <Avatar handleClick={handleAvatarClick} currentAvatar={currentAvatar} />
      {isPickerOpen && (
      <Popup avatarList={avatarList} closePopup={closeAvatarPicker} />
      )}
    </div>
  );
}

export default AvatarPicker;
