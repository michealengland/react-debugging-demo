import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

/**
 * Try:
 * Fix this render to render Giraffes.
 *
 * Hint: There are multiple solutions to fix this problem.
 *
 * Lesson: PropTypes.
 */
export default function Giraffes({numberOfGiraffes}) {
  useEffect(() => {
    if (window.location.pathname === '/example4') {
      console.log('Giraffe Count:', numberOfGiraffes)
    }
  }, [])

  return (
    <div>
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
