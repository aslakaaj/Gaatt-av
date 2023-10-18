import "./Disclaimer.css";
import Button from "../UI/Button.js";

const Disclaimer = (props) => {
  const clickHandler = () => {
    props.onClickChange(false);
  };
  return (
    <div className="disclaimer-box">
      <h2>Ansvarsfraskrivelse</h2>
      <p className="disclaimer-content">
        Jeg er et uavhengig enkeltindivid som ikke er tilknyttet noe form for
        avis eller nyhetsbyrå, og har har laget nettstedet av egen interesse og
        hobby. Vil påpeke at jeg imidlertid er medlem av Unge Høyre, men har
        ikke latt politiske syn formet hvordan jeg har formulert beskrivelsene
        til statsrådene. Mener du der er feil knyttet til fakta, eller andre
        innvendinger? <span>Kontakt meg på aslakaaj@gmail.com</span>
      </p>
      <Button onClick={clickHandler}>Tilbake...</Button>
    </div>
  );
};

export default Disclaimer;
