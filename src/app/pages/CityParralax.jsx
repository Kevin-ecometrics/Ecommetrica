import React from "react";
import { Parallax } from 'react-parallax';


function CityParallax() {
  return (
    <Parallax bgImage={"/Scene.png"} strength={650}>
      <div
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </Parallax>
  );
}

export default CityParallax;
