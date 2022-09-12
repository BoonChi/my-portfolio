import Title from 'components/common/title/CustomTitle';
import { useState } from 'react';
import counterStyle from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <div className={counterStyle['main']}>
      <Title title={count} />
      <span onClick={increaseCount}>+</span>
      <span onClick={decreaseCount}>-</span>
    </div>
  );
};

export default Counter;
