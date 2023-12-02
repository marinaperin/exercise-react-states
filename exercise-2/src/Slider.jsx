import { useState } from "react";
import "./Slider.css";

export default function () {
  const [value, setValue] = useState(50);
  return (
    <>
      <div>
        <span>{value}</span>
        <input
          type="range"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setValue(0);
          }}
        >
          Mute
        </button>
      </div>
    </>
  );
}
