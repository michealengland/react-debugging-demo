import React from 'react'
/**
 * Try:
 * Feed the hungry animal.
 */
export default function AnimalKingdom() {
  let energy = 0

  const eat = () => (energy += 10)

  return (
    <div>
      <p>Animal Energy: {energy}</p>
      <button onClick={eat}>Feed the Animal</button>
      {energy >= 10 ? <p>The animal is full!</p> : <p>The animal is hungry!</p>}
    </div>
  )
}
