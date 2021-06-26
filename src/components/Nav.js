import React from 'react';
import { NavLink } from "react-router-dom";


function Nav({completed, setExample}) {
  console.log(completed)

	return (
		<div className='nav-bar'>
      <ul className="row nav">

        <NavLink
            to="/"
            exact
            className="nav-link home"
            onClick={()=>setExample(null)}
          >
            Home
        </NavLink>

        <NavLink
          to="/example1"
          className={`nav-link ${completed.one}`}
          onClick={()=>setExample(1)}
        >
          Paragraph
        </NavLink>

        <NavLink
          to="/example2"
          className={`nav-link ${completed.two}`}
          onClick={()=>setExample(2)}
        >
          Infinite Counter
        </NavLink>

        <NavLink
          to="/example3"
          className={`nav-link ${completed.three}`}
          onClick={()=>setExample(3)}
        >
          Feed the Animals
        </NavLink>

        <NavLink
          to="/example4"
          className={`nav-link ${completed.four}`}
          onClick={()=>setExample(4)}
        >
          Count the Giraffes
        </NavLink>

        <NavLink
          to="/example5"
          className={`nav-link ${completed.five}`}
          onClick={()=>setExample(5)}
        >
          Rename the Elephant
        </NavLink>

        <NavLink
          to="/example6"
          className={`nav-link ${completed.six}`}
          onClick={()=>setExample(6)}
        >
          Fix the Tiger
        </NavLink>

        <NavLink
          to="/example7"
          className={`nav-link ${completed.seven}`}
          onClick={()=>setExample(7)}
        >
          Range Slider
        </NavLink>

      </ul>
		</div>
	);
};

export default Nav
