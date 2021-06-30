import React from 'react'
import {PropTypes} from 'prop-types'
import Instruction from './Instruction'

export default function Instructions({example, setCompleted, completed}) {
  let exampleInstructions
  let hint
  let file
  switch (example) {
    case 'one':
      exampleInstructions =
        'Fix the missing value and render the sentence "Welcome to React"'
      file = 1
      break
    case 'two':
      exampleInstructions =
        'Fix the state so that the count only increases on a controlled button click.'
      file = 2
      break
    case 'three':
      exampleInstructions = 'Feed the hungry animals.'
      file = 3
      break
    case 'four':
      exampleInstructions = 'Help count all the giraffes.'
      hint = 'There are multiple solutions to fix this problem.'
      file = 4
      break
    case 'five':
      exampleInstructions = 'Change the elephants name.'
      hint = "The 'Current Name' should update in real time"
      file = 5
      break
    case 'six':
      exampleInstructions =
        'Render the "type" with a value of "dog" without mutating props or throwing an error.'
      file = 6
      break
    case 'seven':
      exampleInstructions =
        "Reduce the amount of rendering to only what's necessary."
      file = 7
      break
    default:
      exampleInstructions = 'Click a problem above to get started'
      hint = 'hint: start with Paragraph.'
  }

  return (
    <div className="instructions">
      <Instruction
        file={file}
        description={exampleInstructions}
        setCompleted={setCompleted}
        example={example}
        hint={hint}
        completed={completed}
      />
    </div>
  )
}

Instructions.propTypes = {
  example: PropTypes.string,
  setCompleted: PropTypes.func,
  file: PropTypes.number,
  completed: PropTypes.object,
}
