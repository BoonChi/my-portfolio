import React from 'react';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Props = {
  count: number;
  title: string;
  handleIncrease: () => void;
  handleDecrease: () => void;
};
const ClockController: React.FC<Props> = ({
  count,
  title,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <FontAwesomeIcon icon={faArrowUp} onClick={handleIncrease} />
        {count}
        <FontAwesomeIcon icon={faArrowDown} onClick={handleDecrease} />
      </div>
    </div>
  );
};

export default ClockController;
