import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ClockController from 'components/clock/clockController'
import Countdown from 'components/clock/countdown'
import CustomButton from 'components/common/button/CustomButton'
import Title from 'components/common/title/CustomTitle'
import PlayAudio from 'components/common/PlayAudio'
import PomodoroStyles from './Pomodoro.module.scss'

type timerStates = {
  session: string
  break: string
}
const Clock = () => {
  const initialSessionValue = 1
  const initialBreakValue = 1
  const secondMaxValue = 3

  const timerStateTypes: timerStates = {
    session: 'Session',
    break: 'Break',
  }
  const [breakLength, setBreakLength] = useState(initialBreakValue)
  const [sessionLength, setSessionLength] = useState(initialSessionValue)
  const [minute, setMinute] = useState(initialSessionValue)
  const [second, setSecond] = useState(0)
  const [started, setStarted] = useState(false)
  const [timerState, setTimerState] = useState(timerStateTypes.session)
  const [cycle, setCycle] = useState(1)
  const [timerLoop, setTimerLoop] = useState(cycle)
  const handleIncreaseCycle = () => {
    if (started) return ''
    setCycle(cycle + 1)
  }
  const handleDecreaseCycle = () => {
    if (started || cycle < 1) return ''
    setCycle(cycle - 1)
  }
  const handleIncreaseBreak = () => {
    if (started) return ''
    setBreakLength(breakLength + 1)
  }
  const handleDecreaseBreak = () => {
    if (started || breakLength < 1) return ''
    setBreakLength(breakLength - 1)
  }
  const handleIncreaseSession = () => {
    if (started) return ''
    setSessionLength(sessionLength + 1)
    setMinute(minute + 1)
  }
  const handleDecreaseSession = () => {
    if (started || sessionLength < 1 || minute < 1) return ''
    setSessionLength(sessionLength - 1)
    setMinute(minute - 1)
  }
  const handleStart = () => {
    setStarted(!started)
    setTimerLoop(cycle)
  }
  const handleReset = () => {
    setStarted(false)
    setMinute(initialSessionValue)
    setSecond(0)
    setBreakLength(initialBreakValue)
    setSessionLength(initialSessionValue)
    setTimerState(timerStateTypes.session)
    setCycle(1)
  }

  useEffect(() => {
    // when timer not yet started
    if (!started) return

    // when timer starts session
    if (second === 0 && minute > 0 && timerState === timerStateTypes.session) {
      setSecond(secondMaxValue)
      if (minute > 0) setMinute(minute - 1)
    }

    //when session finished and starts break
    else if (
      second === 0 &&
      minute === 0 &&
      timerState === timerStateTypes.session
    ) {
      setMinute(breakLength - 1)
      setTimerState(timerStateTypes.break)
      setSecond(secondMaxValue)
    }
    //when break finished
    else if (
      second === 0 &&
      minute === 0 &&
      timerState === timerStateTypes.break
    ) {
      setTimerState(timerStateTypes.session)
      if (timerLoop > 0) {
        setMinute(sessionLength)
        setTimerLoop(timerLoop - 1)
      } else {
        handleReset()
      }
    }

    let myInterval = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1)
      }
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }
  }, [started, second, timerLoop])
  return (
    <div className={PomodoroStyles['main']}>
      <Title title={'Pomodoro'} />
      <ClockController
        count={cycle}
        title={'Cycle Length'}
        handleIncrease={handleIncreaseCycle}
        handleDecrease={handleDecreaseCycle}
      />
      <ClockController
        count={breakLength}
        title={'Break Length'}
        handleIncrease={handleIncreaseBreak}
        handleDecrease={handleDecreaseBreak}
      />
      <ClockController
        count={sessionLength}
        title={'Session Length'}
        handleIncrease={handleIncreaseSession}
        handleDecrease={handleDecreaseSession}
      />
      <Countdown title={timerState} minute={minute} second={second} />
      <div className={PomodoroStyles['inline-control-button']}>
        <a>
          <CustomButton
            buttonVariant='success'
            buttonName='Start'
            buttonHandler={handleStart}
          />
        </a>
        <a>
          <CustomButton
            buttonVariant='danger'
            buttonName='Reset'
            buttonHandler={handleReset}
          />
        </a>
        <Link href={'/'} passHref>
          <a>
            <CustomButton buttonName={'Back'}></CustomButton>
          </a>
        </Link>
      </div>
      {timerState === timerStateTypes.break ? <PlayAudio /> : null}
    </div>
  )
}

export default Clock
