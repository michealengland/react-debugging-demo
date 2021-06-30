import React from 'react'
import PropTypes from 'prop-types'

/**
 * Try:
 * Fix this render to render Giraffes.
 *
 * Hint: There are multiple solutions to fix this problem.
 */
export default function Giraffes({numberOfGiraffes}) {
  console.log('Giraffe Count:', numberOfGiraffes)

  return (
    <div className="example-inner">
      {'number' !== typeof numberOfGiraffes ? (
        <p>Counting Giraffes...</p>
      ) : (
        <p>There are {numberOfGiraffes} Giraffes in the Animal Kingdom.</p>
      )}
    </div>
  )
}

Giraffes.propTypes = {
  numberOfGiraffes: PropTypes.number,
}
