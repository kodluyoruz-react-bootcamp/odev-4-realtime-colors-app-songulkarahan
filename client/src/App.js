import { useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import { ColorProvider } from "./contexts/ColorContext";

function App() {
  return (
    <>
      <ColorProvider>
        <Container />
      </ColorProvider>
    </>
  );
}

export default App;
