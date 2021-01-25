import React, { useContext } from "react";
import styles from "./styles.module.css";
import ColorContext from "../../contexts/ColorContext";
import { sendColor } from "../../socketService";

const ColorPicker = () => {
  const changeColor = () => {
    sendColor(color);
  };
  const { color, setColor } = useContext(ColorContext);
  return (
    <div className={styles.colorPicker}>
      <input
        className={styles.input}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <br></br>
      <button className={styles.btn} onClick={changeColor}>
        Change Color
      </button>
      <div className={styles.hex}>Renk Kodu: {color.toUpperCase()}</div>
    </div>
  );
};

export default ColorPicker;
