import React from 'react';
import './TryAgain.css';

function TryAgain({
	words,
	characters,
	wpm,
	startAgain
}) {

	return (
		<div className="try-again-container">
			<h1>Test Results</h1>
			<div className="result-container">
				<p>
					<b>Characters : </b> {characters}
				</p>
				<p>
					<b>Words : </b> {words}
				</p>
				<p>
					<b>Speed : </b> {wpm} WPM
				</p>
			</div>
			<div>
				<button className="retry-button" onClick={startAgain}>
					Retry
				</button>
			</div>
		</div>
	)
}

export default TryAgain;
