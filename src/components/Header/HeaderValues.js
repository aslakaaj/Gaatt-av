import "./Header.css";

const HeaderValues = (props) => {
  return (
    <div className="main-box">
      <p>I {props.data} regjeringen:</p>
      <h1 className="main-title">
        HVOR MANGE HAR <br /> GÅTT AV SOM STATSRÅD?
      </h1>
      <h1 className="main-number">{props.num}</h1>

      {!props.info && !props.firstTimeRenderDone && (
        <div className="main-info" onMouseEnter={props.handler}>
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      )}
      {!props.info && props.firstTimeRenderDone && (
        <div
          style={{ animation: "onLeave 0.25s forwards" }}
          className="main-info"
          onMouseEnter={props.handler}
        >
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      )}
    </div>
  );
};

export default HeaderValues;
