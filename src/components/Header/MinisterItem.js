import styles from "./MinisterItem.module.css";
import { useEffect, useState } from "react";

const MinisterItem = (props) => {
  const [imgSrc, setImgSrc] = useState(null);

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
        <p className={styles["minister-role"]}>Tidligere {props.role}</p>
        <p>
          {props.desc}
        </p>
      </div>
    </li>
  );
};

export default MinisterItem;
