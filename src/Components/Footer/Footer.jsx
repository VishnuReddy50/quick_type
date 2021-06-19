import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {

	return (
		<div className="footer-container">
			<a href="https://github.com/VishnuReddy50" target="_blank" rel="noreferrer">
				<GitHubIcon
					className="icons"
				/>
			</a>
			<a href="https://www.instagram.com/vishnu_reddy_50/" target="_blank" rel="noreferrer">
				<InstagramIcon
					className="icons"
				/>
			</a>
			<a href="https://www.linkedin.com/in/vishnu-vardhan-reddy-chitte-7bb83a177/" target="_blank" rel="noreferrer">
				<LinkedInIcon
					className="icons"

				/>
			</a>
			<p>© Copyright 2021 QuickType</p>
		</div>
	)

}

export default Footer;
