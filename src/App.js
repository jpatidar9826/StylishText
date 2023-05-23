import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userIn, setUserIn] = useState("Stylish Font");
  const [style1, setStyle1] = useState();
  const [style2, setStyle2] = useState();

  const onChangeHandler = (event) => {
    const InputString = event.target.value;
    setUserIn(InputString);
  };

  useEffect(() => {
    const StyleGen1 = () => {
      let styledText = "";

      for (let i = 0; i < userIn.length; i++) {
        if (userIn[i] === " ") {
          styledText += " ";
        } else {
          styledText += userIn[i] + "\u032A\u23E6";
        }
      }

      setStyle1(styledText);
    };
    const StyleGen2 = () => {
      const decorativeSymbol = "·.★·.·´¯`·.·★ ";
      const circledText = [...userIn]
        .map((char) => {
          if (char === " ") {
            return " ";
          }
          const unicodeValue = 0x24b6 + char.toUpperCase().charCodeAt(0) - 65;
          return String.fromCharCode(unicodeValue);
        })
        .join("");
      const styledText = decorativeSymbol + circledText + " ★·.·´¯`·.·★.·";
      setStyle2(styledText);
    };
    StyleGen1();
    StyleGen2();
  }, [userIn]);

  return (
    <div className="App">
      <input id="styler" onChange={onChangeHandler} placeholder="input your text"></input>
      <div className="styles-wrap">
        <div className="styles-box">{!!style1 && style1}</div>
        <div className="styles-box">{!!style1 && style2}</div>
      </div>
    </div>
  );
}

export default App;
