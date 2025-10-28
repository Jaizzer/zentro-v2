import type { JSX } from 'react';

import { Link } from 'react-router';

export default function AuthenticationPage(): JSX.Element {
	return (
		<>
			<h1>Welcome to Zentro!</h1>
			<p>Zentro is an easy to use cloud storage.</p>

			<span className="actions">
				<Link className="signUp" to="/sign-up">
					Sign Up
				</Link>
				<Link className="signIn" to="/sign-in">
					Sign In
				</Link>
			</span>
		</>
	);
}
