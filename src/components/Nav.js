import React from 'react';
import { NavLink } from "react-router-dom";


function Nav({completed}) {
  console.log(completed)

	return (
		<div className='nav-bar'>
      <ul className="row nav">
        <NavLink
            to="/"
            exact
            className="nav-link home"
          >
            Home
        </NavLink>
        <li className="nav-link">
          <NavLink
            to="/example1"
            className={`nav-link ${completed.one}`}
          >
            Paragraph
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/example2"
            className={`nav-link ${completed.two}`}
          >
            Infinite Counter
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/example3"
            className={`nav-link ${completed.three}`}
          >
            Feed the Animals
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/example4"
            className={`nav-link ${completed.four}`}
          >
            Count the Giraffes
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/example5"
            className={`nav-link ${completed.five}`}
          >
            Rename the Elephant
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/example6"
            className={`nav-link ${completed.six}`}
          >
            Fix the Tiger
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/example7"
            className={`nav-link ${completed.seven}`}
          >
            Range Slider
          </NavLink>
        </li>
      </ul>
		</div>
	);
};

export default Nav
