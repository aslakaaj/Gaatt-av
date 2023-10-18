import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import data from "./data/data.json";
import Footer from "./components/Footer/Footer";

function App() {
  var [index, setIndex] = useState(0);
  var [canScroll, setCanScroll] = useState(true);
  var [ministerInfoActive, setMinisterInfoActive] = useState(false);
  var maxIndexLength = data.regjeringer.length;

  useEffect(() => {
    function handleScroll(e) {
      const value = parseInt(e.deltaY);

      if (value > 0 && value > 5 && canScroll && !ministerInfoActive) {
        let newIndex = index + 1;
        if (newIndex < maxIndexLength) {
          setCanScroll(false);
          setIndex(newIndex);

          setTimeout(() => {
            setCanScroll(true);
          }, 250); // Allow scrolling again after 1 second
        }
      }

      if (value < 0 && value < -5 && canScroll && !ministerInfoActive) {
        let newIndex = index - 1;
        if (newIndex >= 0) {
          setCanScroll(false);
          setIndex(newIndex);

          setTimeout(() => {
            setCanScroll(true);
          }, 250); // Allow scrolling again after 1 second
        }
      }

      if (index >= maxIndexLength) {
        console.warn("INDEX IS NOT NORMAL VALUE");
      }
    }

    document.addEventListener("wheel", handleScroll);
    console.log(index);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [canScroll, ministerInfoActive, index, maxIndexLength]);

  return (
    <div>
      <Header index={index} setInfoActive={setMinisterInfoActive} />
      <Footer />
    </div>
  );
}

export default App;
