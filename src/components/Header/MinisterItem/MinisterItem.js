import styles from "./MinisterItem.module.css";
import { useEffect, useState } from "react";
import MinisterSource from "./MinisterSource";

const MinisterItem = (props) => {
  const [imgSrc, setImgSrc] = useState(null);
  const date = new Date(props.date);

  //Translates the date format to Norwegian
  const month = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const outDate =
    date.getDate() + ". " + month[date.getMonth()] + " " + date.getFullYear();

  const [sourceActive, setSourceActive] = new useState(false);

  useEffect(() => {
    import(`../../../images/${props.img}`)
      .then((image) => {
        setImgSrc(image.default);
      })
      .catch(
        (error) => {
          console.error("Error importing image: ", error);
        },
        [props.img]
      );
  });

  const sourceClickHandler = () => {
    if (!sourceActive) {
      // console.log("Kilder clicked, setting sourceActive to true");
      setSourceActive(true);
    }
  };

  const setSourceNotActive = () => {
    if (sourceActive) {
      // console.log("MinisterSource clicked, setting sourceActive to false");
      setSourceActive(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles["column-left"]}>
        {imgSrc && <img src={imgSrc} alt={props.name} />}
      </div>
      <div className={styles["column-right"]}>
        <h1>{props.name}</h1>
        <p className={styles["minister-role"]}>
          Tidligere {props.role} ({props.party})
        </p>
        <p className={styles["minister-role"]}>{outDate}</p>
        <p>{props.desc}</p>
        <div className={styles["minister-source"]} onClick={sourceClickHandler}>
          {sourceActive === true ? (
            <MinisterSource
              source={props.source}
              source_text={props.source_text}
              deactivateSource={setSourceNotActive}
            />
          ) : (
            <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
              Kilder
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default MinisterItem;
