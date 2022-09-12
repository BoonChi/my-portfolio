import CustomButton from 'components/common/button/CustomButton';
import { TimerControllerOption } from '../Constant';
import TimeControllerStyle from './TimerController.module.scss';

interface ITimerOptions {
  handleReset: () => void;
  handleAction: () => void;
  started: boolean;
}

const TimerController = ({
  handleReset,
  handleAction,
  started,
}: ITimerOptions) => {
  return (
    <div className={TimeControllerStyle['timer-button']}>
      <CustomButton
        buttonName={
          started ? TimerControllerOption.Stop : TimerControllerOption.Start
        }
        buttonHandler={handleAction}
        buttonVariant={started ? 'success' : 'danger'}
      />
      {started ? (
        <CustomButton
          buttonName={TimerControllerOption.Reset}
          buttonHandler={handleReset}
        />
      ) : null}
    </div>
  );
};

export default TimerController;
