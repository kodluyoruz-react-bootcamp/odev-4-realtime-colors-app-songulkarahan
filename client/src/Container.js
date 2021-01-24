import { useEffect, useContext } from "react";
import ColorContext from "./contexts/ColorContext";
import { initSocket, disconnectSocket, receivedColor } from "./socketService";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import "./App.css";

function Container() {
  const { color, setColor } = useContext(ColorContext);

  useEffect(() => {
    initSocket();
    receivedColor((color) => {
      setColor(color);
    });
    return () => disconnectSocket();
  }, [setColor]);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <ColorPicker />
    </div>
  );
}

export default Container;
