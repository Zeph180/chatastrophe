import React, { useState } from "react";
import Header from "../Header";

const LoginPage = () => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}; 
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault(); 
		console.log(email, password);
	};

	return (
		<div id="LoginContainer" className="inner-container">
			<Header />
			<form>
				<p>Sign in or signup by entering your password and email</p>
				<input 
					type="text"
					placeholder="Email"
					value={email}
					onChange={handleEmailChange}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={handlePasswordChange}
				/>
				<button className="red light" type="submit" onClick={handleSubmit}>Login</button> 
			</form>
		</div>
	);
};

export default LoginPage;
