import type { JSX } from 'react';

import { Link } from 'react-router';

export default function AuthenticationPage(): JSX.Element {
	return (
		<>
			<h1 className="text-3xl font-bold">Welcome to Zentro!</h1>
			<p>Zentro is an easy to use cloud storage.</p>

			<span className="actions">
				<Link
					className="p-2 rounded-md bg-primary hover:bg-accent text-white"
					to="/sign-up"
				>
					Sign Up
				</Link>
				<Link
					className="p-2 rounded-md bg-primary hover:bg-accent text-white"
					to="/sign-in"
				>
					Sign In
				</Link>
			</span>
		</>
	);
}
