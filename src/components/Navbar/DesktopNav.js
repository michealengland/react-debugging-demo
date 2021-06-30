import React from 'react'
import NavLinks from './NavLinks'
import {PropTypes} from 'prop-types'

export default function DesktopNav({completed, setExample, visible}) {
  return (
    <NavLinks
      completed={completed}
      visible={visible}
      setExample={setExample}
      outerClassName={visible ? 'hidden-desktop' : 'open-desktop'}
      innerClassName={'nav-link'}
    />
  )
}

DesktopNav.propTypes = {
  completed: PropTypes.object,
  setExample: PropTypes.func,
  visible: PropTypes.bool,
}
