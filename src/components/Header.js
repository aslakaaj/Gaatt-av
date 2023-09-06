import "./Header.css";
import data from "../data/data.json";

const Header = (props) => {
  return (
    <div className="main-box">
        <p>I {data.regjeringer[0].name} regjeringen:</p>
      <h1 className="main-title">Hvor mange har <br/> gått av som statsråd?</h1>
      <h1 className="main-number">{data.regjeringer[0].num}</h1>

      <button className="main-btn" type="button"></button>
    </div>
  );
};

export default Header;