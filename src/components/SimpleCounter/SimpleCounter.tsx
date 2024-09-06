import { useState } from 'react';

const SimpleCounter = () => {
	const [count, setCount] = useState(0)

    const handleSetCount = () => {
        setCount(count + 1)
    }

	return (
		<div className="simpleCounter">
			<p style={{ fontWeight: 700 }}>{count}</p>
			<button onClick={handleSetCount}>
				Click
			</button>
		</div>
	)
}

export default SimpleCounter;
