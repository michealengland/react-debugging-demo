/* eslint-disable react/prop-types */
import React from 'react'

export default function Modal({closeModal, modal, defaultState, setCompleted}) {
  let showHideClassName = modal ? 'modal' : 'modal hidden'
  const reset = () => {
    setCompleted(defaultState)
    closeModal()
  }
  debugger

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div>
          Thanks for completing the course! Feel free to share with friends, and
          I hope it was helpful.
          <br></br>
          Check out my other repos{' '}
          <a
            className="gh-link"
            target="_blank"
            href="https://github.com/michealengland/"
            rel="noreferrer"
          >
            here
          </a>
          !<br></br>
          <button className="btn reset" onClick={() => reset()}>
            {' '}
            Try Again?{' '}
          </button>
        </div>
      </div>
    </div>
  )
}
