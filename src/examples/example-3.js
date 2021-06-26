import React, {useState} from 'react';

/**
 * Try:
 * Feed the hungry animal.
 */
export default function AnimalKingdom() {


	const [energy] = useState(0)

	const eat = () => energy += 10;

	return (
			<div className='example-inner'>

				<p>Animal Energy: {energy}</p>
				<button onClick={eat} className='btn'>Feed the Animal</button>
				{energy < 10
				?
				<p>The animals are hungry, feed them!</p>
				:
				<p> The animals are now full</p>
				}
			</div>
	)
}
