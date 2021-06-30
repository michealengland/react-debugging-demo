/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="home-text">
        <h1 className="home-title header">
          Welcome to the React Debugging Course
        </h1>
        <ul className="homepage-list">
          <p>
            The goal of this course is to properly render each page, while
            clearing all errors in the console, and completing all the goals.
          </p>
          <li>Instructions are on the left</li>
          <li>
            You can clone the repo{' '}
            <a
              target="_blank"
              className="gh-link"
              rel="noreferrer"
              href="https://github.com/michealengland/react-debugging-demo"
            >
              here
            </a>
            , and feel free to reach out if you have any questions{' '}
          </li>
          <li>
            Don't forget: you can use the <code>debugger</code> keyword to pause
            execution as long as your inspector is open
          </li>
          <li>And if you're ever stuck, look in the console for any logs</li>
          <p>Good luck, and thanks for playing :) </p>
        </ul>{' '}
      </div>
    </div>
  )
}
