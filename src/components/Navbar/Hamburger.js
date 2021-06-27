import { useState } from "react";
import NavLinks from "./NavLinks";
import HamburgerSvg from './hamburgerSvg';

const Hamburger = ({visible, completed, setExample, render, setRender}) => {

  const [color, setColor] = useState('#fff')

  const handleClick = (() => {
    setColor(color === '#fff' ? '#55bcc9' : '#fff');
    setRender(!render);
  })

  return (
    <div>
    <div className={`hamburger ${visible}`} onClick={handleClick}>
      <HamburgerSvg color={color} />
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
