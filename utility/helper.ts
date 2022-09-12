import { ConfirmationAction, IClockOption } from 'components/clock/Constant';
import { resolve } from 'path';

export const freezeObject = (obj: { [key: string]: any }) => {
  for (const [_key, value] of Object.entries(obj)) {
    if (typeof value === 'object') freezeObject(value);
  }
  Object.freeze(obj);
  return obj;
};

export const handleConfirmationPromise = async (
  action: ConfirmationAction,
  timerOption: keyof IClockOption
): Promise<boolean> => {
  return new Promise(resolve => {
    resolve(confirm(`Are you confirm to ${action} ${timerOption} timer`));
  });
};
