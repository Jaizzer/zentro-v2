import type { JSX } from 'react';

export default function SignUpPage(): JSX.Element {
	return (
		<>
			<h1>Sign Up</h1>
			<p>Create an account</p>

			<form>
				<input data-testid="name" placeholder="Name" type="text" />
				<input data-testid="email" placeholder="Email" type="email" />
				<input data-testid="password" placeholder="Password" type="password" />
			</form>
		</>
	);
}
