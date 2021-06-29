/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import Hamburger from './Hamburger'
import DesktopNav from './DesktopNav'

export default function NavSwitch({completed, setExample}) {
  const [visible, setVisible] = useState(false)
  const [widthFlag, setWidthFlag] = useState(0)
  const [render, setRender] = useState(false)

  useEffect(() => {
    setWidthFlag(window.outerWidth)
    function checkWidth() {
      setWidthFlag(window.outerWidth)
      if (window.outerWidth <= 900) {
        setVisible(true)
        setRender(false)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [widthFlag])

  return (
    <div className="nav-bar">
      <DesktopNav
        completed={completed}
        setExample={setExample}
        visible={visible}
      />
      <Hamburger
        visible={visible}
        completed={completed}
        setExample={setExample}
        render={render}
        setRender={setRender}
      />
    </div>
  )
}
