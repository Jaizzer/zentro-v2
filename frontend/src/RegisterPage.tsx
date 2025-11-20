import type { JSX } from 'react';

import registerPageImage from './assets/register-page-image-1.png';
import Page from './Page';

export default function RegisterPage(): JSX.Element {
	return (
		<>
			<Page>
				<div className="grid h-full content-start items-start justify-items-center overflow-hidden rounded-lg pt-15 md:grid-cols-2 md:grid-rows-1 md:items-center md:justify-items-start md:gap-10 md:pt-0">
					<div className="md:bg-background grid h-full w-full items-center justify-items-center">
						<img className="w-full max-w-96 sm:max-w-full" src={registerPageImage} />
					</div>
					<section className="grid w-full justify-items-center bg-white md:justify-items-start">
						<h1 className="text-left text-3xl font-bold">Register</h1>
						<p>Create an account </p>
						<form className="mt-1 grid w-full max-w-100 grid-cols-1 justify-items-center gap-4 px-5 py-5 sm:px-0 md:justify-items-start">
							<input
								className="outline-accent w-full rounded-md bg-gray-100 px-4 py-3"
								data-testid="name"
								placeholder="Name"
								type="text"
							/>
							<input
								className="outline-accent w-full rounded-md bg-gray-100 px-4 py-3"
								data-testid="email"
								placeholder="Email"
								type="email"
							/>
							<input
								className="outline-accent w-full rounded-md bg-gray-100 px-4 py-3"
								data-testid="password"
								placeholder="Password"
								type="password"
							/>
						</form>
					</section>
				</div>
			</Page>
		</>
	);
}
