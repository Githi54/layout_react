import "./Header.component.css";
import { Navigation } from "../Navigation";
import { useState, useEffect } from "react";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <header className="header">
      <p className="header__logo">Landing</p>
      {windowWidth >= 1000 && <Navigation />}
      <button className="header__buy">Buy</button>
    </header>
  );
};
