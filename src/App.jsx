import { useState } from "react";
import styles from "./style.module.css";
function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [randomNumber, setRandomNumber] = useState(5);
  const giveRandomNumber = () => {
    setRandomNumber(
      Math.floor(Math.random() * (maxValue - minValue) + 1) + minValue
    );
  };
  return (
    <>
      <div className={styles.container}>
        <h1>Random calculator🧮</h1>
        <p className={styles.description}>
          (Returns random numbers among the numbers you choose.)
        </p>
        <div className={styles.randomNumber}>
          {" "}
          <h2>Random number:</h2>
          <h2 className={styles.result}>{randomNumber}</h2>
        </div>

        <div className={styles.minAndMax}>
          {" "}
          <h3>Minimum: </h3>
          <span>
            <input
              type="number"
              value={minValue}
              className={styles.input}
              onChange={(e) => {
                setMinValue(+e.target.value);
              }}
            />
          </span>
          <h3>Maximum:</h3>
          <span>
            <input
              type="number"
              value={maxValue}
              className={styles.input}
              onChange={(e) => {
                setMaxValue(+e.target.value);
              }}
            />
          </span>
        </div>
        <button className={styles.button} onClick={giveRandomNumber}>
          Get Random Number
        </button>
      </div>
    </>
  );
}

export default App;
