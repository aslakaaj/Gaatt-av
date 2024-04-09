import "./Header.css";
import data from "../../data/data.json";
import { useEffect, useState } from "react";
import MinisterInfoContainer from "./MinisterContainer/MinisterInfoContainer";
import HeaderValues from "./HeaderValues";

const Header = (props) => {
  const [info, setInfo] = useState(false);
  const [firstTimeRenderDone, setFirstTimeRenderDone] = useState(false);
  const [ministerNum, setMinisterNum] = useState(data.regjeringer[props.index].ministers.length)

  // console.log("PROPS INDEX: " + props.index);
  //Changes the website background color depending on which side the selected government is on
  if (data.regjeringer[props.index].side === "left" && props.index < data.regjeringer.length && props.index >= 0) {
    document.body.style = `background-color: var(--left-side-color);`;
  }
  if (data.regjeringer[props.index].side === "right" && props.index < data.regjeringer.length && props.index >= 0) {
    document.body.style = `background-color: var(--right-side-color);`;
  }

  useEffect(() => {
    setMinisterNum(data.regjeringer[props.index].ministers.length);
  }, [props.index])
    

  const mouseEnterHandler = () => {
    setInfo(true);
    props.setInfoActive(true);
  };

  const mouseExitHandler = () => {
    setFirstTimeRenderDone(true);
    setInfo(false);
    props.setInfoActive(false);
  };

  return (
    <div className="main-box">
      <HeaderValues data={data.regjeringer[props.index].name} firstTimeRenderDone={firstTimeRenderDone} info={info} num={ministerNum.toString()} handler={mouseEnterHandler}/>
      {info && <MinisterInfoContainer index={props.index} mouseLeave={mouseExitHandler} newCount={setMinisterNum}/>}
    </div>
  );
};

export default Header;
