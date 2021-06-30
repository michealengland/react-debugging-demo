import React from 'react'
import PropTypes from 'prop-types'

/**
 * Try:
 * Fix the missing value and render a sentence.
 *
 * Lesson: Referencing props.
 */
export default function Paragraph({textObj}) {
  const {word1, word2, word3} = textObj

  return <p>{`${word1} + ${word2} + ${word3.value}`}</p>
}

Paragraph.propTypes = {
  textObj: PropTypes.shape({
    word1: PropTypes.string,
    word2: PropTypes.string,
    word3: PropTypes.string,
  }),
}
