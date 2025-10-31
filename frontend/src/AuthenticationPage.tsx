import type { JSX } from 'react';

import NavLink from './NavLink';

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
