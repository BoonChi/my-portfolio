import { freezeObject } from 'utility/helper';

export type IClockOption = {
  [key: string]: {
    value: number;
    desc: string;
  };
};

export const ClockOption: IClockOption = freezeObject({
  Pomodoro: {
    value: 25,
    desc: 'Time to focus!',
  },
  'Short Break': {
    value: 5,
    desc: 'Take a short break!',
  },
  'Long Break': {
    value: 15,
    desc: 'Take a long break!',
  },
});

export enum TimerControllerOption {
  Start = 'START',
  Stop = 'STOP',
  Reset = 'RESET',
}
export const intialSecond = 0;
export const secondCountFrom = 59;

export enum ConfirmationAction {
  RESET = 'reset',
  SWITCH = 'switch to',
}
