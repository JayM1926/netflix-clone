import axios from "axios";
import React, { useState } from "react";
import "../styles/signup.scss";
import { useHistory } from "react-router";

export const Signup = () => {
	const [input, setInput] = useState({});

	const { user_name, email, password } = input;

	const history = useHistory();

	// const onInput = (e) => {
	// 	setInput({ [e.target.name]: e.target.value });
	// };

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:6001/add", input);

			if (response.data.status) {
				history.push("/");
				return true;
			} else {
				return { error: response.data.error };
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log(input);

	return (
		<div className="signupScreen__body">
			<div className="signinScreen">
				<form className="signinScreen__form">
					<h1 className="signinScreen__title">Sign Up</h1>
					<div className="signinScreen__signin">
						<input
							onInput={(e) => {
								setInput({ ...input, [e.target.name]: e.target.value });
							}}
							className="signinScreen__input"
							type="text"
							name={"email"}
							input={email}
							placeholder="E-mail"
						/>
					</div>
					<div className="signinScreen__signin">
						<input
							onInput={(e) => {
								setInput({ ...input, [e.target.name]: e.target.value });
							}}
							className="signinScreen__input"
							type="text"
							name={"user_name"}
							input={user_name}
							placeholder="Username"
						/>
					</div>
					<div className="signinScreen__signin">
						<input
							onInput={(e) => {
								setInput({ ...input, [e.target.name]: e.target.value });
							}}
							className="signinScreen__input"
							type="password"
							name={"password"}
							input={password}
							placeholder="Password"
						/>
					</div>
					<button onClick={onSubmit} className="signinScreen__btn">
						Sign Up
					</button>
				</form>
				<div className="signinScreen__gradient" />

				<div className="signinScreen__body"></div>
			</div>
		</div>
	);
};
