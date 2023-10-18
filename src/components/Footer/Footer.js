import "./Footer.css";

const Footer = (props) => {

  const clickHandler = () => {
    props.onClickChange(true);
  }

  return (
    <div className="footer">
      <p>
        Nettsiden er utviklet av{" "}
        <a href="aslakjonsson.com">Aslak Aa. Jønsson</a> © 2024
      </p>
      <p onClick={clickHandler}>ANSVARSFRASKRIVELSE</p>
    </div>
  );
};

export default Footer;
