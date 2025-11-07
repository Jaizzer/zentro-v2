import type { JSX } from 'react';

export default function SignUpPage(): JSX.Element {
	return (
		<>
			<h1>Sign Up</h1>
			<p>Create an account</p>

			<form>
				<input data-testid="name" type="text" />
				<input data-testid="email" placeholder="email" type="email" />
			</form>
		</>
	);
}
