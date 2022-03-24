import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const style = {
    button: {
      backgroundColor: disabled ? "gray" : buttonColor,
      color: "#ffffff",
      border: "1px solid transparent",
      padding: "0.5rem 1rem",
      margin: "1rem",
      cursor: "pointer",
      outline: "1px solid transparent",
      borderRadius: "5px",
    },
  };
  const changeColor = () => {
    setButtonColor(newButtonColor);
  };
  const handleCheckBox = (e) => {
    setDisabled(e.target.checked);
  };

  return (
    <div>
      <button style={style.button} onClick={changeColor} disabled={disabled}>
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="toggle-button-state"
        defaultChecked={disabled}
        onChange={handleCheckBox}
      />
      <label htmlFor="toggle-button-state">Disable button</label>
    </div>
  );
}

export default App;
