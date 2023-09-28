import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  var [index, setIndex] = useState(0);
  var value = 0;

  var canScroll = true;
  document.addEventListener("wheel", (e) => {
    value = parseInt(e.deltaY);

    if (value > 0 && value > 5 && canScroll) {
      canScroll = false;
      setIndex(index++);
    }

    if (value < 0 && value < -5 && canScroll) {
      canScroll = false;
      setIndex(index -= 1);
    }
  });

  return (
    <div>
      <Header index={index} />
    </div>
  );
}

export default App;
