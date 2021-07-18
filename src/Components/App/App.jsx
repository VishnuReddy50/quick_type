import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Challenge from '../Challenge/Challenge';
import Footer from '../Footer/Footer';

const totalTime = 60;
const serviceUrl = "https://baconipsum.com/api/?type=meat-and-filler&paras=1&sentences=9&format=text";
const defaultState = {
	selectedParagraph: "Hola Dio!",
	testInfo: [],
	timerStarted: false,
	timeRemaining: totalTime,
	words: 0,
	characters: 0,
	wpm: 0,
};

class App extends React.Component {

	state = defaultState;

	fetchNewParagraph = () => {
		fetch(serviceUrl)
			.then(response => response.text())
			.then((data) => {
				const selectedParagraphArray = data.split("");
				const testInfo = selectedParagraphArray.map((selectedLetter) => {
					return {
						testLetter: selectedLetter,
						status: "notAttempted",
					};
				});

				this.setState({
					...defaultState,
					testInfo,
					selectedParagraph: data
				});
			});
	}

	componentDidMount() {
		this.fetchNewParagraph();
	}

	startTimer = () => {
		this.setState({
			timerStarted: true
		});
		const timer = setInterval(() => {
			if (this.state.timeRemaining > 0) {
				const timeSpent = totalTime - this.state.timeRemaining;
				const wpm =
					timeSpent > 0
						? (this.state.words / timeSpent) * totalTime
						: 0;
				this.setState({
					timeRemaining: this.state.timeRemaining - 1,
					wpm: parseInt(wpm)
				});
			} else {
				clearInterval(timer);
			}
		}, 1000);
	};

	startAgain = () => this.fetchNewParagraph();

	handleUserInput = (inputValue) => {
		if (!this.state.timerStarted)
			this.startTimer();

		const characters = inputValue.length;
		const words = inputValue.split(" ").length;
		const index = characters - 1;

		//Handling the underflow case in textarea
		if (index < 0) {
			this.setState({
				testInfo: [
					{
						testLetter: this.state.testInfo[ 0 ].testLetter,
						status: "notAttempted",
					},
					...this.state.testInfo.slice(1),
				],
				characters,
				words,
			});

			return;
		}

		//Handling the overflow case in textarea
		if (index >= this.state.selectedParagraph.length) {
			this.setState({
				characters,
				words,
			});
			return;
		}

		// Handling backspace
		const testInfo = this.state.testInfo;
		if (!(index === this.state.selectedParagraph.length - 1))
			testInfo[ index + 1 ].status = "notAttempted";

		// Check for mistake
		const isMistake = inputValue[ index ] === testInfo[ index ].testLetter;

		// Update the testInfo
		testInfo[ index ].status = isMistake ? "correct" : "incorrect";

		// Update the state
		this.setState({
			testInfo,
			words,
			characters,
		});
	};


	render() {
		return (
			<div className="app">
				<Nav />
				<Landing />
				<Challenge
					selectedParagraph={this.state.selectedParagraph}
					testInfo={this.state.testInfo}
					timeRemaining={this.state.timeRemaining}
					timerStarted={this.state.timerStarted}
					words={this.state.words}
					characters={this.state.characters}
					wpm={this.state.wpm}
					handleUserInput={this.handleUserInput}
					startAgain={this.startAgain}
				/>
				<Footer />
			</div>
		)
	}

}

export default App;
