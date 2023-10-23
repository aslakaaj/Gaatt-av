import "./MinisterInfoContainer.css";
import MinisterItem from "./MinisterItem";
import data from "../../data/data.json";
import MinisterSelect from "./MinisterSelect";
import { useEffect, useState, useRef} from "react";

const useOutsideAlerter = (ref, props) =>{
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.mouseLeave();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, props]);
}

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

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props);

  return (
    <div className="minister-container" ref={wrapperRef} onMouseLeave={props.mouseLeave}>
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
                party={minister.party}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default MinisterInfoContainer;
