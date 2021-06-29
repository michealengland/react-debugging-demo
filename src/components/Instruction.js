import React from 'react'
import {PropTypes} from 'prop-types'

export default function Instruction({
  description,
  setCompleted,
  example,
  hint,
  file,
}) {
  return (
    <div className="body">
      {file ? <p className="file">File: example{file}</p> : null}
      <p>{description}</p>
      {hint && <p className="hint">{hint}</p>}
      <button
        className="btn complete"
        onClick={() =>
          setCompleted(prevState => ({...prevState, [example]: true}))
        }
      >
        Finished?
      </button>
    </div>
  )
}

Instruction.propTypes = {
  description: PropTypes.string,
  setCompleted: PropTypes.func,
  example: PropTypes.string,
  hint: PropTypes.string,
  file: PropTypes.number,
}
