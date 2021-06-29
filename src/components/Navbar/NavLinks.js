import React from 'react'
import {NavLink} from 'react-router-dom'
import {PropTypes} from 'prop-types'

export default function NavLinks({
  completed,
  handleClick,
  innerClassName,
  outerClassName,
  setExample,
}) {
  console.log(outerClassName)
  return (
    <ul className={`${outerClassName} nav`} onClick={handleClick}>
      <NavLink
        to="/"
        exact
        className={`${innerClassName} home`}
        onClick={() => setExample(null)}
      >
        Home
      </NavLink>
      <NavLink
        to="/example1"
        className={`${innerClassName} ${completed.one}`}
        onClick={() => setExample('one')}
      >
        Paragraph
      </NavLink>
      <NavLink
        to="/example2"
        className={`${innerClassName} ${completed.two}`}
        onClick={() => setExample('two')}
      >
        Infinite Counter
      </NavLink>
      <NavLink
        to="/example3"
        className={`${innerClassName} ${completed.three}`}
        onClick={() => setExample('three')}
      >
        Feed the Animals
      </NavLink>
      <NavLink
        to="/example4"
        className={`${innerClassName} ${completed.four}`}
        onClick={() => setExample('four')}
      >
        Count the Giraffes
      </NavLink>
      <NavLink
        to="/example5"
        className={`${innerClassName} ${completed.five}`}
        onClick={() => setExample('five')}
      >
        Rename the Elephant
      </NavLink>
      <NavLink
        to="/example6"
        className={`${innerClassName} ${completed.six}`}
        onClick={() => setExample('six')}
      >
        Fix the Tiger
      </NavLink>
      <NavLink
        to="/example7"
        className={`${innerClassName} ${completed.seven}`}
        onClick={() => setExample('seven')}
      >
        Range Slider
      </NavLink>
    </ul>
  )
}

NavLinks.propTypes = {
  completed: PropTypes.object,
  handleClick: PropTypes.func,
  innerClassName: PropTypes.string,
  outerClassName: PropTypes.bool,
  setExample: PropTypes.func,
}
