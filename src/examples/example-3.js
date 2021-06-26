import Instructions from '../components/Instructions';
/**
 * Try:
 * Feed the hungry animal.
 */
export default function AnimalKingdom() {

	let energy = 0;

	const eat = () => energy += 10;

	return (
		<div className='example-outer'>
			<Instructions example={3} />
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
		</div>
	)
}
