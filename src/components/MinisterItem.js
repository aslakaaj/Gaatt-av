import styles from "./MinisterItem.module.css";
import data from '../data/data.json';

const MinisterItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles["column-left"]}>
        <img src={require("./Ole_Borten_Moe.jpg")} />
      </div>
      <div className={styles["column-right"]}>
        <h1>{data.regjeringer[0].ministers[0].name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          aspernatur saepe consectetur veritatis autem harum, deserunt eveniet
          amet labore ipsa maiores perferendis nam sed repudiandae, ea ab, sint
          minus. Et! {data.regjeringer[0].ministers[0].desc}
        </p>
      </div>
    </div>
  );
};

export default MinisterItem;
