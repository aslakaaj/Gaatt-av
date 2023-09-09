import "./MinisterInfoContainer.css";
import MinisterItem from "./MinisterItem";
import data from "../data/data.json";

const MinisterInfoContainer = (props) => {
  const ministers = data.regjeringer[0].ministers;

  return (
    <div className="minister-container"  onMouseLeave={props.mouseLeave}>
      <ul>
        {ministers.map((minister) => (
          <MinisterItem name={minister.name} desc={minister.desc} img={minister.img} />
        ))}{" "}
      </ul>
    </div>
  );
};

export default MinisterInfoContainer;
