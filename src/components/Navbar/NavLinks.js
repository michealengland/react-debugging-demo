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
  return (
    <nav className={`${outerClassName} nav`} onClick={handleClick}>
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
        className={`${innerClassName} ${
          completed.one ? 'complete' : 'incomplete'
        }`}
        onClick={() => setExample('one')}
      >
        {completed.one ? <i className="fas fa-check"></i> : null}
        Paragraph
      </NavLink>
      <NavLink
        to="/example2"
        className={`${innerClassName} ${
          completed.two ? 'complete' : 'incomplete'
        }`}
        onClick={() => setExample('two')}
      >
        {completed.two ? <i className="fas fa-check"></i> : null}
        Infinite Counter
      </NavLink>
      <NavLink
        to="/example3"
        className={`${innerClassName} ${
          completed.three ? 'complete' : 'incomplete'
        }`}
        onClick={() => setExample('three')}
      >
        {completed.three ? <i className="fas fa-check"></i> : null}
        Feed the Animals
      </NavLink>
      <NavLink
        to="/example4"
        className={`${innerClassName} ${
          completed.four ? 'complete' : 'incomplete'
        }`}
        onClick={() => setExample('four')}
      >
        {completed.four ? <i className="fas fa-check"></i> : null}
        Count the Giraffes
      </NavLink>
      <NavLink
        to="/example5"
        className={`${innerClassName} ${
          completed.five ? 'complete' : 'incomplete'
        }`}
        onClick={() => setExample('five')}
      >
        {completed.five ? <i className="fas fa-check"></i> : null}
        Rename the Elephant
      </NavLink>
      <NavLink
        to="/example6"
        className={`${innerClassName} ${
          completed.six ? 'complete' : 'incomplete'
        }`}
        onClick={() => setExample('six')}
      >
        {completed.six ? <i className="fas fa-check"></i> : null}
        Fix the Tiger
      </NavLink>
      <NavLink
        to="/example7"
        className={`${innerClassName} ${
          completed.seven ? 'complete' : 'incomplete'
        }`}
        onClick={() => setExample('seven')}
      >
        {completed.seven ? <i className="fas fa-check"></i> : null}
        Range Slider
      </NavLink>
    </nav>
  )
}

NavLinks.propTypes = {
  completed: PropTypes.object,
  handleClick: PropTypes.func,
  innerClassName: PropTypes.string,
  outerClassName: PropTypes.string,
  setExample: PropTypes.func,
}
