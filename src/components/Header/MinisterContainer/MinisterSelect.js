import styles from "./MinisterSelect.module.css";

const MinisterSelect = (props) => {
  const changeHandler = (event) => {
    let value = event.target.value;
    props.selectDataCollect(value);
  };

  return (
    <div className={styles.wrapping}>
      <label htmlFor="ministerSelect">Filtrer: </label>
      <select id="ministerSelect" name="minister-posistion" onChange={changeHandler}>
        <option value={null}>Ingen...</option>
        {props.list.map((position) => {
          return <option value={position}>{position}</option>;
        })}
      </select>
    </div>
  );
};

export default MinisterSelect;
