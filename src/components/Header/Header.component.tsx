import "./Header.component.css";
import { Navigation } from "../Navigation";
import { useState, useEffect } from "react";

type Props = {
  windowWidth: number;
};

export const Header: React.FC<Props> = ({ windowWidth }) => {
  return (
    <header className="header">
      <a href="/" className="header__logo">Landing</a>
      {windowWidth >= 1000 && <Navigation />}
      <button className="header__buy">Buy</button>
    </header>
  );
};
