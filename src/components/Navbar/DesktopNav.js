/* eslint-disable react/prop-types */
import React from 'react'
import NavLinks from './NavLinks'

export default function DesktopNav({completed, setExample, visible}) {
  return (
    <NavLinks
      completed={completed}
      visible={visible}
      setExample={setExample}
      outerClassName={visible}
      innerClassName={'nav-link'}
    />
  )
}
