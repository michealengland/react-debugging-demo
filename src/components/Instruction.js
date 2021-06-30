import React from 'react'
import {PropTypes} from 'prop-types'

export default function Instruction({
  description,
  setCompleted,
  example,
  hint,
  file,
  completed,
}) {
  return (
    <div className="instruction-body">
      {file ? <p className="file">File: example{file}</p> : null}
      <p>{description}</p>
      {hint && <p className="hint">{hint}</p>}
      {example === null || example === 'null' ? null : (
        <button
          className="btn complete"
          onClick={() =>
            setCompleted(prevState => ({
              ...prevState,
              [example]: !completed[example],
            }))
          }
        >
          {completed[example] ? 'Mark Incomplete' : 'Finished'}
        </button>
      )}
    </div>
  )
}

Instruction.propTypes = {
  description: PropTypes.string,
  setCompleted: PropTypes.func,
  example: PropTypes.string,
  hint: PropTypes.string,
  file: PropTypes.number,
  completed: PropTypes.object,
}
