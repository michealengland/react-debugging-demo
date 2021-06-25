import PropTypes from 'prop-types';

/**
 * Try:
 * Fix this render to render Giraffes.
 *
 * Hint: There are multiple solutions to fix this problem.
 */

export default function Giraffes({numberOfGiraffes}) {
	console.log('Giraffe Count:', numberOfGiraffes);

	if ('number' !== typeof numberOfGiraffes) {
		return <p>Loading Giraffes...</p>
	}

	return <p>There are {numberOfGiraffes} Giraffes in the Animal Kingdom.</p>
}

Giraffes.propTypes = {
	numberOfGiraffes: PropTypes.number,
}