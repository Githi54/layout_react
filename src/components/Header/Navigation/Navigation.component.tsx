import "./Navigation.component.css";

export const Navigation = () => {
  const navItems: string[] = ["Clothes", "Sneakers", "Bags", "Accessorize"];
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((itemName) => (
          <li key={itemName} className="navigation__item">
            <a className="navigation__link" href="#">
              {itemName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
