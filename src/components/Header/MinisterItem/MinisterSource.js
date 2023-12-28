import { click } from "@testing-library/user-event/dist/click";
import styles from "./MinisterSource.module.css";

const MinisterSource = (props) => {
    const clickHandler = () => {
      console.log("MinisterSource clicked, calling setActive");
      props.deactivateSource();
    };
  
    return (
      <p onClick={clickHandler} className={styles["source"]}>
        {props.source_text} <a className={styles["link"]} href={props.source}>Link</a>
      </p>
    );
  };

export default MinisterSource;
