import { useState } from "react";

export default function () {
  const [passwordLength, setPasswordLength] = useState(0);
  let [password, setPassword] = useState("");
  let passwordChar = "";

  return (
    <>
      <div>
        <label>
          How many characters should the password have?
          <input
            type="number"
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <button
          id="generate"
          onClick={() => {
            for (let i = 0; i < passwordLength; i++) {
              const values = [
                "a",
                "A",
                "b",
                "B",
                "c",
                "C",
                "d",
                "D",
                "e",
                "E",
                "f",
                "F",
                "g",
                "G",
                "h",
                "H",
                "i",
                "I",
                "j",
                "J",
                "k",
                "K",
                "l",
                "L",
                "m",
                "M",
                "n",
                "N",
                "o",
                "O",
                "p",
                "P",
                "q",
                "Q",
                "r",
                "R",
                "s",
                "S",
                "t",
                "T",
                "u",
                "U",
                "v",
                "V",
                "w",
                "W",
                "x",
                "X",
                "y",
                "Y",
                "z",
                "Z",
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
              ];
              const n = Math.floor(Math.random() * 62);
              const val = values[n];
              passwordChar += val;
            }
            setPassword(passwordChar);
          }}
        >
          Generate
        </button>
      </div>
      <div>The password is: {password}</div>
    </>
  );
}
