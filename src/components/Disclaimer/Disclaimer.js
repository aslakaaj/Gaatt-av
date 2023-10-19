import styles from "./Disclaimer.module.css";
import Button from "../UI/Button.js";

const Disclaimer = (props) => {
  const clickHandler = () => {
    props.onClickChange(false);
  };
  return (
    <div className={styles["disclaimer-box"]}>
      <h2>Ansvarsfraskrivelse</h2>
      <p className={styles["disclaimer-content"]}>
        Jeg er et uavhengig enkeltindivid som ikke er tilknyttet noe form for
        avis eller nyhetsbyrå, og har har laget nettstedet av egen interesse og
        hobby. Vil påpeke at jeg imidlertid er medlem av Unge Høyre, men har
        ikke latt politiske syn formet hvordan jeg har formulert beskrivelsene
        til statsrådene. Mener du der er feil knyttet til fakta, eller andre
        innvendinger? Ta kontakt.
      </p>
      <p className={styles.contact}><a href="mailto: aslakaaj@gmail.com">Kontakt meg på aslakaaj@gmail.com</a></p>
      <Button onClick={clickHandler}>Tilbake...</Button>
    </div>
  );
};

export default Disclaimer;
