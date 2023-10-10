import "./MinisterInfoContainer.css";
import MinisterItem from "./MinisterItem";
import data from "../../data/data.json";

const MinisterInfoContainer = (props) => {
  const ministers = data.regjeringer[props.index].ministers;

  return (
    <div className="minister-container"  onMouseLeave={props.mouseLeave}>
      <ul>
        {ministers.map((minister) => (
          <MinisterItem key={Math.random()} name={minister.name} desc={minister.desc} role={minister.role} img={minister.img} />
        ))}
      </ul>
    </div>
  );
};

export default MinisterInfoContainer;
