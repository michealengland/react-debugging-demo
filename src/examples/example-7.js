import React, {useRef, useState} from 'react'

/**
 * Try:
 * Reduce the amount of rendering to only what's necessary.
 *
 * Lesson: Event handling.
 */
export default function RangeSlider() {
  const ref = useRef(null)
  const name = 'ranger-slider-demo'
  const [trackedSelections, setTrackedSelections] = useState([])

  return (
    <div>
      <label htmlFor={name}>Current Range Value: {ref.current?.value}</label>
      <input
        ref={ref}
        id={name}
        max={1000}
        min={0}
        name={name}
        onChange={e => {
          // Update selected values.
          const updatedArray = [...trackedSelections]
          updatedArray.push(e.target.value)
          setTrackedSelections(updatedArray)
        }}
        type="range"
      />
      <div className="range-printed-data">
        [{trackedSelections && trackedSelections.join(', ')}]
      </div>
    </div>
  )
}
