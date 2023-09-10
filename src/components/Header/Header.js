import "./Header.css";
import data from "../../data/data.json";
import { useState } from "react";
import MinisterInfoContainer from "./MinisterInfoContainer";

const Header = (props) => {
  const [info, setInfo] = useState(false);
  const [firstTimeRenderDone, setFirstTimeRenderDone] = useState(false);

  const mouseEnterHandler = () => {
    setInfo(true);
  };

  const mouseExitHandler = () => {
    setFirstTimeRenderDone(true);
    setInfo(false);
  };

  return (
    <div className="main-box">
      <p>I {data.regjeringer[0].name} regjeringen:</p>
      <h1 className="main-title">
        HVOR MANGE HAR <br /> GÅTT AV SOM STATSRÅD?
      </h1>
      <h1 className="main-number">
        {data.regjeringer[0].ministers.length.toString()}
      </h1>

      {!info && !firstTimeRenderDone && (
        <div className="main-info" onMouseEnter={mouseEnterHandler}>
          <span class="material-symbols-outlined">more_horiz</span>
        </div>
      )}
      {!info && firstTimeRenderDone && (
        <div
          style={{ animation: "onLeave 0.25s forwards" }}
          className="main-info"
          onMouseEnter={mouseEnterHandler}
        >
          <span class="material-symbols-outlined">more_horiz</span>
        </div>
      )}
      {info && <MinisterInfoContainer mouseLeave={mouseExitHandler} />}
    </div>
  );
};

export default Header;
