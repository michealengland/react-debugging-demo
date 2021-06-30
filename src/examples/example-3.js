import React from 'react'

/**
 * Try:
 * Feed the hungry animal.
 *
 * Lesson: Re-rendering.
 */
export default function AnimalKingdom() {
  let energy = 0
  const eat = () => (energy += 10)

  return (
    <div className="example-inner">
      <p>Animal Energy: {energy}</p>
      <button onClick={eat}>Feed the Animal</button>
      {energy >= 10 ? <p>The animal is full!</p> : <p>The animal is hungry!</p>}
    </div>
  )
}
