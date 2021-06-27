import { useState } from "react";
import NavLinks from "./NavLinks";
import HamburgerSvg from './hamburgerSvg';

const Hamburger = ({visible, completed, setExample, render, setRender}) => {

  const [color, setColor] = useState(false)
  let iconColor = color ? '#fff' : '#55bcc9'

  const handleClick = (() => {
    setColor(!color);
    setRender(!render);
  })

  return (
    <div>
    <div className={`hamburger ${visible}`} onClick={handleClick}>
      <HamburgerSvg color={iconColor} />
    </div>
        {render ?
         <NavLinks
          completed={completed}
          visible={visible}
          setExample={setExample}
          outerClassName={'hamburger-open'}
          innerClassName={'hamburger-link'}
        />
        :
        null
        }

    </div>
  )
}

export default Hamburger
