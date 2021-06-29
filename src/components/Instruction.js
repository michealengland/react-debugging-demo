import React from 'react'
import {PropTypes} from 'prop-types'
import Tooltip from './Tooltip/Tooltip'

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
      {example !== null ? (
        <button
          className="btn complete"
          onClick={() =>
            setCompleted(prevState => ({...prevState, [example]: true}))
          }
        >
          Finished?
        </button>
      ) : (
        <div className="contact">
          <Tooltip text={"Mike England's Github"}>
            <a
              href="https://github.com/michealengland"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <i className="fa fa-github"></i>{' '}
            </a>
          </Tooltip>
          <Tooltip text={"J.R. McCann's Github"}>
            <a
              href="https://github.com/johnrobertmcc"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <i className="fa fa-github"></i>{' '}
            </a>
          </Tooltip>
        </div>
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
}
