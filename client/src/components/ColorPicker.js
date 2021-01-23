import React, { useState, useEffect } from "react";
import {
  initSocket,
  disconnectSocket,
  sendColor,
  receivedColor,
} from "../socketService";

const ColorPicker = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    initSocket();
    receivedColor((color) => {
      setColor(color);
    });

    return () => disconnectSocket();
  }, [color]);

  const changeColor = () => {
    sendColor(color);
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={changeColor}> Change Color</button>
    </div>
  );
};

export default ColorPicker;
