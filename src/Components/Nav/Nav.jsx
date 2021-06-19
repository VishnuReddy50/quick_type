import React from "react";
import './Nav.css';
import logo from './../../Assets/Logo.png';

function Nav() {

	return (
		<div className="nav-container">
			<div className="nav-left">
				<img className="flash-logo" src={logo} alt="logo" />
				<p className="flash-logo-text">QuickType</p>
			</div>
		</div>
	)

}

export default Nav;
