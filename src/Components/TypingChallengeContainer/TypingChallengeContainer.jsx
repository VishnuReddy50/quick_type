import React from 'react';
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge';

function TypingChallengeContainer({
	selectedParagraph,
	testInfo,
	timeRemaining,
	timerStarted,
	words,
	characters,
	wpm,
	handleUserInput
}) {

	return (
		<div className="typing-challenge-container">
			<div className="details-container">
				<ChallengeDetailsCard
					cardName="Words"
					cardValue={words}
				/>
				<ChallengeDetailsCard
					cardName="Characters"
					cardValue={characters}
				/>
				<ChallengeDetailsCard
					cardName="WPM"
					cardValue={wpm}
				/>
			</div>
			<div className="typewriter-container">
				<TypingChallenge
					selectedParagraph={selectedParagraph}
					testInfo={testInfo}
					timeRemaining={timeRemaining}
					timerStarted={timerStarted}
					handleUserInput={handleUserInput}
				/>
			</div>
		</div>
	)
}

export default TypingChallengeContainer;
