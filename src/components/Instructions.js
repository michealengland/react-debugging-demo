import React from 'react';

function Instructions({example}) {
	let exampleInstructions;
	switch (example) {
		case 1:
			exampleInstructions= <div className='body'><p className='file'>File: example1</p><p>Fix the missing value and render the sentence "Welcome to React"</p></div>
			break;
		case 2:
			exampleInstructions= <div className='body'><p className='file'>File: example2</p><p>Fix the state so that the count only increases on a controlled button click.</p></div>
			break;
		case 3:
			exampleInstructions= <div className='body'><p className='file'> File: example3</p><p>Feed the hungry animals.</p></div>
			break;
		case 4:
			exampleInstructions= <div className='body'><p className='file'>File: example4</p><p>Help count all the giraffes.</p><p className='hint'>Hint: There are multiple solutions to fix this problem.</p></div>
			break;
		case 5:
			exampleInstructions= <div className='body'><p className='file'>File: example5</p><p>Change the elephants name.</p><p className='hint'>Hint: the 'Current Name' should update in real time</p></div>
			break;
		case 6:
			exampleInstructions= <div className='body'><p className='file'>File: example6</p><p>Render the "type" with a value of "dog" without mutating props or throwing an error.</p></div>
			break;
		case 7:
			exampleInstructions= <div className='body'><p className='file'>File: example7</p><p>Reduce the amount of rendering to only what's necessary.</p></div>
			break;
		default:
			exampleInstructions = <div className='body'><p className='body'>Click a problem above to get started</p><p className='hint'>hint: start with Paragraph. <br></br>It's a debugging course, so yes, it is meant to be broken. <br></br>Fix it.</p></div>
	}

	return (
		<div className='instructions'>
            {exampleInstructions}
		</div>
	);
};

export default Instructions
