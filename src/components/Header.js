import React from "react";
import logo from "/src/assets/icon.png";


const Header = () => {
	return (
		<div id="Header">
			<img src={logo} alt="logo"/>
			<h1>Chatastrophe</h1>
		</div>
	);
};

export default Header;