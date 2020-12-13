import Key from "./Key";
import React from "react";
import "./App.css";

const data = [
  {
    keyCode: 81,
    keyValue: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyValue: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyValue: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyValue: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyValue: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyValue: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyValue: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyValue: "X",
    keyCode: 88,
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyValue: "C",
    keyCode: 67,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
class App extends React.Component {
  render() {
    const showed = data.map((key, idx) => {
      return (
        <Key
          letter={key.keyValue}
          audioSrc={key.url}
          key={idx}
          keyCode={key.keyCode}
        />
      );
    });
    return <div className="page">{showed}</div>;
  }
}

export default App;
