import "./MinisterInfoContainer.css";
import MinisterItem from "../MinisterItem/MinisterItem";
import data from "../../../data/data.json";
import MinisterSelect from "./MinisterSelect";
import { useEffect, useState, useRef} from "react";
import MinisterCheckBox from "./MinisterCheckBox";

const useOutsideAlerter = (ref, props, data, newCount) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.mouseLeave();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      newCount(data);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, props, data, newCount]);
};

const MinisterInfoContainer = ({index, newCount, ...restProps}) => {
  const [selectedMinisterRole, setSelectedMinisterRole] = useState(null);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [newMinisterCount, setNewMinisterCount] = useState();

  const ministers = data.regjeringer[index].ministers;

  let ministerPosList = [];

  //Adds the ministerpositions that are of the current selected government
  data.regjeringer[index].ministers.forEach((ministers) => {
    ministerPosList.push(ministers.role);
  });

  //Sorts the array so no duplicates are in the select
  let sortedMinisterPosList = [...new Set(ministerPosList)];

  const selectDataHandler = (selectValue) => {
    setSelectedMinisterRole(selectValue);
  };

  const boxChecked = (boxValue) => {
    setCheckBoxValue(boxValue);
  };

  //Filters the shown ministers after the selected value
  const filteredMinistersFromRole = ministers.filter((minister) => {
    if (selectedMinisterRole === "Ingen..." || selectedMinisterRole === null) {
      return ministers;
    } else {
      //Legg inn IF checkbox er true, så skal endre lista
      return minister.role === selectedMinisterRole;
    }
  });

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, restProps, ministers.length, newCount);

  // Filters the data after if the data controverse
  const completeFilteredList = filteredMinistersFromRole.filter((minister) => {
    if (!checkBoxValue) {
      return filteredMinistersFromRole;
    }
    return minister.controverse === checkBoxValue;
  });

//  Updates the minister count after the new list
  useEffect(() => {
    if (completeFilteredList !== undefined) {
      setNewMinisterCount(completeFilteredList.length);
      if (newMinisterCount !== undefined) {
        newCount(newMinisterCount);
        console.log(newMinisterCount);
      }
    }
  }, [completeFilteredList, newMinisterCount, newCount]);

  // const sourceClick = (source, source_text) => {
  //   console.log(source_text + source);
  // }

  return (
    <div
      className="minister-container"
      ref={wrapperRef}
      // Commented out because testing without mouseLeave: onMouseLeave={props.mouseLeave}
    >
      <div className="container-filter">
        <MinisterCheckBox boxChecked={boxChecked} />
        <MinisterSelect
          list={sortedMinisterPosList}
          selectDataCollect={selectDataHandler}
        />
      </div>
      <ul>
        {index < data.regjeringer.length && index >= 0
          ? completeFilteredList.map((minister) => (
              <MinisterItem
                key={Math.random()}
                name={minister.name}
                desc={minister.desc}
                role={minister.role}
                img={minister.img}
                party={minister.party}
                date={minister.departure_date}
                source={minister.source}
                source_text={minister.source_text}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default MinisterInfoContainer;
