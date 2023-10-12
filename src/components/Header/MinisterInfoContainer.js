import "./MinisterInfoContainer.css";
import MinisterItem from "./MinisterItem";
import data from "../../data/data.json";
import MinisterSelect from "./MinisterSelect";

const MinisterInfoContainer = (props) => {
  const ministers = data.regjeringer[props.index].ministers;

  return (
    <div className="minister-container"  onMouseLeave={props.mouseLeave}>
      <MinisterSelect/>
      <ul>
        {(props.index < data.regjeringer.length && props.index >= 0) ? ministers.map((minister) => (
          <MinisterItem key={Math.random()} name={minister.name} desc={minister.desc} role={minister.role} img={minister.img} />
        )): null}
      </ul>
    </div>
  );
};

export default MinisterInfoContainer;
