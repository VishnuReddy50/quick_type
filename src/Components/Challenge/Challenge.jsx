import React from 'react';
import './Challenge.css';
import TestContainer from '../TestContainer/TestContainer';

function Challenge({
	selectedParagraph,
	testInfo,
	timeRemaining,
	timerStarted,
	words,
	characters,
	wpm,
	handleUserInput,
	startAgain
}) {
	return (
		<div className="challenge-container">
			<h1 data-aos="fade-down" className="challenge-header">
				Take a speed test now!
			</h1>
			<TestContainer
				selectedParagraph={selectedParagraph}
				testInfo={testInfo}
				timeRemaining={timeRemaining}
				timerStarted={timerStarted}
				words={words}
				characters={characters}
				wpm={wpm}
				handleUserInput={handleUserInput}
				startAgain={startAgain}
			/>
		</div>
	)
}

export default Challenge;
