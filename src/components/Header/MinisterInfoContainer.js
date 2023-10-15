import "./MinisterInfoContainer.css";
import MinisterItem from "./MinisterItem";
import data from "../../data/data.json";
import MinisterSelect from "./MinisterSelect";
import { useState } from "react";

const MinisterInfoContainer = (props) => {
  const [selectedMinisterRole, setSelectedMinisterRole] = useState(null);

  const ministers = data.regjeringer[props.index].ministers;

  let ministerPosList = [];

  //Adds the ministerpositions that are of the current selected government
  data.regjeringer[props.index].ministers.forEach((ministers) => {
    ministerPosList.push(ministers.role);
  });

  //Sorts the array so no duplicates are in the select
  let sortedMinisterPosList = [...new Set(ministerPosList)];

  const selectDataHandler = (selectValue) => {
    setSelectedMinisterRole(selectValue);
  };

  //Filters the shown ministers after the selected value
  const filteredMinisters = ministers.filter((minister) => {
    if (selectedMinisterRole === null) {
      return ministers;
    } else {
      return minister.role === selectedMinisterRole;
    }
  });

  return (
    <div className="minister-container" onMouseLeave={props.mouseLeave}>
      <MinisterSelect
        list={sortedMinisterPosList}
        selectDataCollect={selectDataHandler}
      />
      <ul>
        {props.index < data.regjeringer.length && props.index >= 0
          ? filteredMinisters.map((minister) => (
              <MinisterItem
                key={Math.random()}
                name={minister.name}
                desc={minister.desc}
                role={minister.role}
                img={minister.img}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default MinisterInfoContainer;
