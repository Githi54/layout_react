import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app_container">
      <Header windowWidth={windowWidth} />
      <Main />
    </div>
  );
}

export default App;
