import "./Header.css";
import data from "../data/data.json";
import { useState } from "react";
import MinisterInfoContainer from "./MinisterInfoContainer";

const Header = (props) => {
    const [info, setInfo] = useState(false);

    const mouseEnterHandler = () => {
        setInfo(true);
    }

    const mouseExitHandler = () => {
      setInfo(false);
    }

  return (
    <div className="main-box">
        <p>I {data.regjeringer[0].name} regjeringen:</p>
      <h1 className="main-title">Hvor mange har <br/> gått av som statsråd?</h1>
      <h1 className="main-number">{data.regjeringer[0].num}</h1>

      {!info && <div className="main-info" onMouseEnter={mouseEnterHandler}></div>}
      {info && <MinisterInfoContainer mouseLeave={mouseExitHandler}/>}
    </div>
  );
};

export default Header;