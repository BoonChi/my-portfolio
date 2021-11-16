import React, { useEffect, useState } from "react";
import CustomButton from "../../components/common/CustomButton";
import Description from "../../components/common/Description";
import Title from "../../components/common/Title";
import styles from "../../styles/Pomodoro.module.scss";
const Pomodoro = () => {
  const initialValue = 0;
  const initialCondition = false;
  const [count, setCount] = useState(initialValue);
  const [started, setStarted] = useState(initialCondition);
  const addCounter = () => {
    setCount(count + 1);
  };
  const reduceCounter = () => {
    count > 0 ? setCount(count - 1) : setCount(initialValue);
  };
  const resetCounter = () => {
    setCount(initialValue);
    setStarted(false);
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (count > 0 && started) {
        setCount((count) => count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [started, count]);

  return (
    <div className={styles.container}>
      <Title title="Pomodoro" />
      <Description description="Current count value is " />
      <strong className={styles.count}>{count}</strong>
      <div className={styles.row}>
        <CustomButton buttonName="+" buttonHandler={addCounter} />
        <CustomButton buttonName="-" buttonHandler={reduceCounter} />
        <CustomButton
          buttonName={started ? "PAUSE" : "START"}
          buttonHandler={() => setStarted(!started)}
        />
        <CustomButton buttonName="RESET" buttonHandler={resetCounter} />
      </div>
    </div>
  );
};

export default Pomodoro;
