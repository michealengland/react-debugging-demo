import React, {useRef, useState} from 'react'

/**
 * Try:
 * Reduce the amount of rendering to only what's necessary.
 */
function RangeSlider() {
  const ref = useRef(null)
  const name = 'ranger-slider-demo'
  const [trackedSelections, setTrackedSelections] = useState([])

  return (
      <div className='example-inner range'>
        <label htmlFor={ name }>Current Range Value: {ref.current?.value}</label>
        <input
          ref={ref}
          id={name}
          max={1000}
          min={0}
          name={name}
          onChange={(e) => {
            // Update selected values.
            const updatedArray = [...trackedSelections]
            updatedArray.push(e.target.value);
            setTrackedSelections(updatedArray)
          }}
          type="range"
          />
        <p>[{trackedSelections && trackedSelections.join(', ')}]</p>
      </div>
  );
};

export default RangeSlider
