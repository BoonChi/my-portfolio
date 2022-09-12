import React, { useEffect, useState } from 'react';
import Title from 'components/common/title/CustomTitle';
import BeepSound from 'public/beep.mp3';
import PomodoroStyles from './Pomodoro.module.scss';
import MainLayout from 'components/layouts/MainLayout';
import {
  ClockOption,
  ConfirmationAction,
  intialSecond,
  secondCountFrom,
} from 'components/clock/Constant';
import TimerOptions from 'components/clock/Option/TimerOptions';
import TimerController from 'components/clock/Controller/TimerController';
import { handleConfirmationPromise } from 'utility/helper';

const Clock = () => {
  const options = Object.keys(ClockOption);
  const [option, setOption] = useState(options[0]);
  const [minute, setMinute] = useState(ClockOption.Pomodoro.value);
  const [second, setSecond] = useState(intialSecond);
  const [started, setStarted] = useState(false);

  const handleOption = async (selectedOptionName: string) => {
    let isSwitched = false;
    if (started) {
      setStarted(false);
      isSwitched = await handleConfirmationPromise(
        ConfirmationAction.SWITCH,
        selectedOptionName
      );
      if (!isSwitched) {
        setStarted(true);
        return;
      }
    }

    setMinute(ClockOption[selectedOptionName].value);
    setSecond(intialSecond);
    setOption(selectedOptionName);
  };

  const handleReset = async () => {
    setStarted(false);
    const response = await handleConfirmationPromise(
      ConfirmationAction.RESET,
      option
    );
    if (response) {
      resetTimer();
    } else {
      setStarted(true);
    }
  };

  const resetTimer = () => {
    setMinute(ClockOption.Pomodoro.value);
    setSecond(intialSecond);
    setStarted(false);
    setOption(options[0]);
  };

  useEffect(() => {
    // when timer is started
    if (!started) return;
    const intervalId = setInterval(() => {
      // when timer is stopped counting
      if (!started) return;
      setSecond((prevSecond: number) => {
        if (prevSecond < 1) {
          setSecond(secondCountFrom);
          setMinute(prevMinute => {
            if (prevMinute < 1) {
              const playAudioPromise = new Promise(resolve => {
                const sound = new Audio(BeepSound);
                resolve(sound.play());
              });
              playAudioPromise.then(() => {
                alert('The time is up!');
                resetTimer();
              });
            }
            return prevMinute - 1;
          });
        }
        return prevSecond - 1;
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [started]);

  return (
    <MainLayout>
      <div className={PomodoroStyles['pomodoro']}>
        <TimerOptions options={options} selectOption={handleOption} />
        <Title
          title={minute + ': ' + (second < 10 ? '0' + second : second)}
          larger={true}
        />
        <TimerController
          handleReset={handleReset}
          handleAction={() => setStarted(!started)}
          started={started}
        />
        <Title title={ClockOption[option].desc} />
      </div>
    </MainLayout>
  );
};

export default Clock;
