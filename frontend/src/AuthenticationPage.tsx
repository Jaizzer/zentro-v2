import type { JSX } from 'react';

import { Link } from 'react-router';
import styled, { css } from 'styled-components';

const NavLink = styled(Link)<{ $button?: boolean }>`
	color: black;
	text-decoration: none;
	font-family: 'Arial';

	${(props) =>
		props.$button &&
		css`
			padding: 10px;
			border-radius: 7px;
			background-color: #6161ff;
			color: white;
		`};
`;

export default function AuthenticationPage(): JSX.Element {
	return (
		<>
			<h1>Welcome to Zentro!</h1>
			<p>Zentro is an easy to use cloud storage.</p>

			<span className="actions">
				<NavLink $button className="signUp" to="/sign-up">
					Sign Up
				</NavLink>
				<NavLink $button className="signIn" to="/sign-in">
					Sign In
				</NavLink>
			</span>
		</>
	);
}
