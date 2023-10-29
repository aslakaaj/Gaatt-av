const MinisterCheckBox = (props) => {
    const changeHandler = (event) =>{
            props.boxChecked(event.target.checked);
    }
  return (
    <div>
      <label htmlFor="controverse-ckbox">Kontroverser: </label>
      <input type="checkbox" id="controverse-ckbox" onChange={changeHandler}/>
    </div>
  );
};

export default MinisterCheckBox;
