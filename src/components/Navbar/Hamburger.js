/* eslint-disable react/prop-types */
import React from 'react'
import {useState} from 'react'
import NavLinks from './NavLinks'
import HamburgerSvg from './hamburgerSvg'

export default function Hamburger({completed, render, setExample, setRender, visible}) {
  const [color, setColor] = useState(true)
  let iconColor = color ? '#fff' : '#55bcc9'

  const handleClick = () => {
    setColor(!color)
    setRender(!render)
  }

  return (
    <div>
      <div className={`hamburger ${visible}`} onClick={handleClick}>
        <HamburgerSvg color={iconColor} />
      </div>
      {render ? (
        <NavLinks
          completed={completed}
          visible={visible}
          setExample={setExample}
          outerClassName={'hamburger-open'}
          innerClassName={'hamburger-link'}
          handleClick={handleClick}
        />
      ) : null}
    </div>
  )
}
