import './counter.css';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function Plus() {
    setCount(count + 1);
  }

  function Minus() {
    setCount(count - 1);
  }

  function checkState() {
    if (count > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={`counter ${checkState() ? 'green' : 'red'}`}>
      <div className="counter-display">
        <h1>{count}</h1>
      </div>
      <div className="counter-button-container">
        <div className="counter-button">
          <button className="plus" onClick={Plus}>
            +
          </button>
        </div>
        <div className="counter-button">
          <button className="minus" onClick={Minus}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
