import AppleSVG from "../../assets/apple.svg";
import AndroidSVG from "../../assets/android.svg";
import "./Chips.component.css";

export const Chips = () => {
  return (
    <div className="chip__container">
      <div className="chip__content">
        <a href="/" className="chip chip__apple">
          <img src={AppleSVG} alt="" className="chip__logo" />
        </a>
        <a href="/" className="chip chip__android">
          <img src={AndroidSVG} alt="" className="chip__logo" />
        </a>
      </div>
      <p className="chip__text">App available</p>
    </div>
  );
};
