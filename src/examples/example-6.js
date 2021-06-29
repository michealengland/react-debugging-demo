import React from 'react'
import PropTypes from 'prop-types'

/**
 * Try:
 * Render the "type" with a value of "dog" without mutating props or throwing an error.
 */
export default function Tiger({tigerTraits}) {
  const newTigerTraits = tigerTraits
  const {age, color, stripeColor, type, weight} = newTigerTraits

  newTigerTraits.type = 'dog'

  const isMutated =
    tigerTraits === newTigerTraits &&
    Object.is(tigerTraits.type, newTigerTraits.type)

  return (
    <div>
      <h2>Tiger Traits</h2>
      {isMutated && (
        <p>
          {`MUTATED Props! <code>tigerTraits.type</code> should equal "feline" not
          "${tigerTraits.type}"`}
        </p>
      )}
      <ul>
        <li>{age}</li>
        <li>{color}</li>
        <li>{stripeColor}</li>
        <li>{type}</li>
        <li>{weight}</li>
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
  }),
}
