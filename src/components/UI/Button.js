import styles from "./Button.module.css";

const Button = (props) => {
    //style={this.style.backgroundColor = document.body.style.backgroundColor} 
    return <button className={styles["custom-btn"]} style={{backgroundColor: document.body.style.backgroundColor}}onClick={props.onClick}>{props.children}</button>;
}

export default Button;