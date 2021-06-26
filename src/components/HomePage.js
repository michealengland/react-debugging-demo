import React from 'react';
import Instructions from './Instructions';

function HomePage() {

	return (
		<div className="homepage">
        <Instructions />
        <div className='home-text'>
          <h3 className='home-title header'>Welcome to Mike England's React Debugging Course</h3>
          <p className='home-title'>The goal of this course is to properly render each page, while clearing all errors in the console, and completing all the goals.</p>
           <p className='home-title'>Instructions are on the left</p>
          <p className='home-title'>You can clone the repo <a target="_blank" className='gh-link' href="https://github.com/michealengland/react-debugging-demo">here</a>, and feel free to reach out if you have any questions </p>
          <p className='home-title'>Don't forget: you can use the <code>debugger</code> keyword to pause execution as long as your inspector is open</p>
          <p className='home-title'>And if you're ever stuck, look in the console for any logs</p>
          <p className='home-title'>Good luck, and thanks for playing :) </p>
        </div>
		</div>
	);
};

export default HomePage
