import "./Header.component.css";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="header">
      <p className="header__logo">Landing</p>
      <Navigation />
      <button className="header__buy">Buy</button>
    </header>
  );
};
