import React from "react";
import { Dispatch } from "redux";
import { useAppDispatch, useAppSelector } from "../../pages/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch: Dispatch<any> = useAppDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
