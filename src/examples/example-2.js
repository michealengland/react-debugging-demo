import {useEffect, useState} from 'react'
import Instructions from '../components/Instructions';

/**
 * Try:
 * Fix the state so that the count only increases on a controlled button click.
 */
export default function InfiniteCounter() {

	const [count, setCount] = useState(0);

	/**
	 * Everytime count changes, trigger a sideeffect.
	 */
	useEffect(()=>{
		if (count < 100) {
			setCount(count + 1);
		}
	}, [count])

	return (
			<div className='example-inner'>
				<p>Current Count: {count}</p>
				<button className='btn'>Increase Count</button>
			</div>
	)
}
