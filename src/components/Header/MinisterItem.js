import styles from "./MinisterItem.module.css";
import { useEffect, useState } from "react";

const MinisterItem = (props) => {
  const [imgSrc, setImgSrc] = useState(null);
  const date = new Date(props.date);

  const month = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
  const outDate = date.getDate()  + ". " + month[date.getMonth()] + " " + date.getFullYear();


  useEffect(() => {
    import(`../../images/${props.img}`).then((image) =>{
      setImgSrc(image.default);
    })
    .catch((error) =>{
      console.error('Error importing image: ', error)
    }, [props.img]);

  })
  
  return (
    <li className={styles.item}>
      <div className={styles["column-left"]}>
      {imgSrc && <img src={imgSrc} alt={props.name} />}
      </div>
      <div className={styles["column-right"]}>
        <h1>{props.name}</h1>
        <p className={styles["minister-role"]}>Tidligere {props.role} ({props.party})</p>
        <p className={styles["minister-role"]}>{outDate}</p>
        <p>
          {props.desc}
        </p>
      </div>
    </li>
  );
};

export default MinisterItem;
