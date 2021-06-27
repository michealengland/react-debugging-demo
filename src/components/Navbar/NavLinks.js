import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavLinks({completed, setExample, visible, outerClassName, innerClassName}) {
	return (
    <ul className={`${outerClassName} nav`}>
     <NavLink
            to="/"
            exact
            className={`${innerClassName} home`}
            onClick={()=>setExample(null)}
          >
            Home
        </NavLink>
        <NavLink
          to="/example1"
          className={`${innerClassName} ${completed.one}`}
          onClick={()=>setExample(1)}
        >
          Paragraph
        </NavLink>
        <NavLink
          to="/example2"
          className={`${innerClassName} ${completed.two}`}
          onClick={()=>setExample(2)}
        >
          Infinite Counter
        </NavLink>
        <NavLink
          to="/example3"
          className={`${innerClassName} ${completed.three}`}
          onClick={()=>setExample(3)}
        >
          Feed the Animals
        </NavLink>
        <NavLink
          to="/example4"
          className={`${innerClassName} ${completed.four}`}
          onClick={()=>setExample(4)}
        >
          Count the Giraffes
        </NavLink>
        <NavLink
          to="/example5"
          className={`${innerClassName} ${completed.five}`}
          onClick={()=>setExample(5)}
        >
          Rename the Elephant
        </NavLink>
        <NavLink
          to="/example6"
          className={`${innerClassName} ${completed.six}`}
          onClick={()=>setExample(6)}
        >
          Fix the Tiger
        </NavLink>
        <NavLink
          to="/example7"
          className={`${innerClassName} ${completed.seven}`}
          onClick={()=>setExample(7)}
        >
          Range Slider
        </NavLink>
    </ul>
    )
}
