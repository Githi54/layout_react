import "./Navigation.component.css";

export const Navigation = () => {
  const navItems: string[] = ["Clothes", "Sneakers", "Bags", "Accessorize"];
  return (
    <nav className="header__navigation navigation">
      <ul className="navigation__list">
        {navItems.map((itemName) => (
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              {itemName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
