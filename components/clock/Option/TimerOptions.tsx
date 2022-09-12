import TimerOptionsStyle from './TimerOptions.module.scss';

interface ITimerOptions {
  options: string[];
  selectOption: (option: string) => void;
}

const TimerOptions = ({ options, selectOption }: ITimerOptions) => {
  return (
    <div className={TimerOptionsStyle['timer-options']}>
      {options.map((option: string, index: number) => (
        <div key={'timerOptions' + index} onClick={() => selectOption(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default TimerOptions;
