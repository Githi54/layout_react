import { Chips } from "../Chips";
import "./Main.component.css";

export const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__content_container">
          <Chips />
          <div className="main__text_container">
            <span className="main__text">
              Choose your winter{" "}
              <div className="main__text_special">look</div> apparel
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
