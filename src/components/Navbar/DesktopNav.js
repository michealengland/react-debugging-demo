import React from 'react';
import NavLinks from './NavLinks';

function DesktopNav({completed, setExample, visible}) {
	return <NavLinks completed={completed} visible={visible} setExample={setExample} outerClassName={visible} innerClassName={'nav-link'}/>
};

export default DesktopNav;
