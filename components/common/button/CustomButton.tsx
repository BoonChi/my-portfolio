import { Button } from 'react-bootstrap';
import CustomButtonStyle from './CustomButton.module.scss';
type Props = {
  buttonName: string;
  buttonHandler?: () => void;
  buttonVariant?: string;
  buttonAnimation?: boolean;
};
const CustomButton = ({
  buttonName,
  buttonHandler,
  buttonVariant,
  buttonAnimation,
}: Props) => {
  return (
    <div>
      <Button
        variant={buttonVariant}
        onClick={buttonHandler}
        size="lg"
        className={`${CustomButtonStyle['custom-button']} ${
          buttonAnimation ? CustomButtonStyle['custom-button-animation'] : null
        }`}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default CustomButton;
