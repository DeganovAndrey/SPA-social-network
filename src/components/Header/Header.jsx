import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="http://i.pinimg.com/originals/ae/bf/f8/aebff820fd4da79db61299c3ac69bd9a.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
