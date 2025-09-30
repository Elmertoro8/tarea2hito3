import React from "react";
import { Entity, Scene } from "aframe-react";
import VRImage from "./assets/components/VRImage"


const App: React.FC = () => {
  return (
    <Scene>
      {/* Fondo 360 */}
      <Entity primitive="a-sky" src="/360imagen.jpg" rotation="0 -90 0" />

      {/* Cámara con cursor */}
      <Entity primitive="a-camera" position="0 1.6 0">
        <Entity primitive="a-cursor" />
      </Entity>

      {/* Caja de prueba */}
      <Entity
        primitive="a-box"
        position="0 1.5 -3"
        width="1"
        height="1"
        depth="1"
        color="tomato"
        events={{
          click: (e: any) => e.target.setAttribute("color", "blue"),
        }}
      />

      {/* Imágenes con contexto */}
      <VRImage
        src="/templo.webp"
        position="-2 2 -4"
        caption="Templo en cochabamba"
      />
      <VRImage
        src="/sud.png"
        position="2 2 -4"
        caption="Iglesia de jesucristo"
      />
    </Scene>
  );
};


export default App;
