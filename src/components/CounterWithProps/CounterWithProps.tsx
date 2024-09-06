import { useState } from "react";

interface ICounterWithPropsProps {
  initialCount?: number;
}

const CounterWithProps = ({ initialCount }: ICounterWithPropsProps) => {
  const [count, setCount] = useState(initialCount ?? 0);

  const handleSetCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counterWithProps">
      <p>{count}</p>
      <button onClick={handleSetCount}>Click</button>
    </div>
  );
};

export default CounterWithProps;
