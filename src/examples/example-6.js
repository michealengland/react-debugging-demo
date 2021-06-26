import PropTypes from 'prop-types';

/**
 * Try:
 * Render the "type" with a value of "dog" without mutating props or throwing an error.
 */
 export default function Tiger({tigerTraits, setCompleted}) {



	const newTigerTraits = tigerTraits;
	const {
		age,
		color,
		stripeColor,
		type,
		weight,
	} = newTigerTraits;

	newTigerTraits.type = 'dog';

	const isMutated = tigerTraits === newTigerTraits && Object.is(tigerTraits.type, newTigerTraits.type);
	return (
			<div className='example-inner'>
				{isMutated && <p className='error'>ERROR: MUTATED Props! <code>tigerTraits.type</code> should equal "feline" not "{tigerTraits.type}"</p>}
				<h2>Tiger Traits</h2>
				<ul className='tiger-traits'>
					<li> Age: {age}</li>
					<li>Color: {color}</li>
					<li>Stripes: {stripeColor}</li>
					<li>Species: {type}</li>
					<li>Weight: {weight}</li>
				</ul>
			</div>
	)
}

Tiger.propTypes = {
	tigerTraits: PropTypes.shape({
		color: PropTypes.oneOf(['orange']),
		stripeColor: PropTypes.oneOf(['black']),
		type: PropTypes.oneOf(['feline']),
		weight: PropTypes.oneOf(['heavy']),
	})
}
