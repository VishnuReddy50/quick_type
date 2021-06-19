import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

function TestContainer({
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
		<div className="test-container">
			{
				timeRemaining > 0 ? (
					<div data-aos="fade-up" className="typing-challenge-container">
						<TypingChallengeContainer
							selectedParagraph={selectedParagraph}
							testInfo={testInfo}
							timeRemaining={timeRemaining}
							timerStarted={timerStarted}
							words={words}
							characters={characters}
							wpm={wpm}
							handleUserInput={handleUserInput}
						/>
					</div>
				) : (
					<div className="try-again-container">
						<TryAgain
							words={words}
							characters={characters}
							wpm={wpm}
							startAgain={startAgain}
						/>
					</div>

				)

			}


		</div>
	)
}

export default TestContainer;
