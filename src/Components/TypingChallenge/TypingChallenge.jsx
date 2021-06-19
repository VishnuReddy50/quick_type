import React from 'react';
import './TypingChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

function TypingChallenge({
	selectedParagraph,
	testInfo,
	timeRemaining,
	timerStarted,
	handleUserInput
}) {

	return (
		<div className="typing-challenge">
			<div className="timer-container">
				<p className="timer">
					00:{timeRemaining > 9 ? timeRemaining : `0${timeRemaining}`}
				</p>
				<p className="timer-info">
					{!timerStarted && "Start typing to start the test"}
				</p>
			</div>

			<div className="textarea-container">
				<div className="textarea-left">
					<div className="textarea test-paragraph">
						{/* {selectedParagraph} */}
						{
							testInfo.map((individualLetter, index) => {
								return (
									<TestLetter
										key={index}
										individualLetter={individualLetter}
									/>
								);
							})
						}
					</div>
				</div>

				<div className="textarea-right">
					<textarea
						onChange={(e) => handleUserInput(e.target.value)}
						className="textarea"
						placeholder="Start typing here"
					></textarea>
				</div>
			</div>
		</div>
	)

}

export default TypingChallenge;
