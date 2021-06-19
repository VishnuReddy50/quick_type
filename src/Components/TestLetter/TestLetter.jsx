import React from 'react';
import './TestLetter.css';

function TestLetter({ individualLetter }) {

	const { status } = individualLetter;
	let statusClass;

	if (status === "correct") {
		statusClass = "test-class-correct";
	} else if (status === "incorrect") {
		statusClass = "test-class-incorrect";
	} else {
		statusClass = "test-class-not-attempted";
	}

	return (
		<span className={`test-letter ${statusClass}`}>
			{individualLetter.testLetter}
		</span>
	)
}

export default TestLetter;
