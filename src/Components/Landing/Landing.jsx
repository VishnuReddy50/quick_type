import React from 'react';
import './Landing.css';
import Flash from './../../Assets/Flash.png';
import Typewriter from 'typewriter-effect';

function Landing() {

	return (
		<div className="landing-container">
			<div data-aos="fade-right" className="landing-left">
				<h1 className="landing-header">
					Can You Type...
				</h1>
				<div className="typewriter-container">
					<Typewriter
						options={{
							strings: [ 'Fast?', 'Correct?', 'quick?' ],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div className="landing-right">
				<img
					data-aos="fade-left"
					className="flash-image"
					src={Flash}
					alt="hero"
				/>
			</div>
		</div>
	)

}

export default Landing;
