import type { JSX } from 'react';

import { Link } from 'react-router';

import registerPageImage from './assets/register-page-image-1.png';
import Page from './Page';

export default function RegisterPage(): JSX.Element {
	return (
		<>
			<Page>
				<main className="grid h-full content-start items-start justify-items-center overflow-hidden rounded-lg pt-15 md:grid-cols-2 md:grid-rows-1 md:items-center md:justify-items-start md:gap-10 md:pt-0">
					<div className="md:bg-background grid h-full w-full items-center justify-items-center">
						<img className="max-w-50 md:max-w-full" src={registerPageImage} />
					</div>
					<section className="grid w-full justify-items-center bg-white md:justify-items-start">
						<h1 className="text-left text-3xl font-bold">Register</h1>
						<p>Create an account </p>
						<form className="mt-1 grid w-full max-w-100 grid-cols-1 justify-items-center gap-4 px-5 py-5 sm:px-0 md:justify-items-start">
							<div className="grid w-full">
								<label htmlFor="email">Email</label>
								<input
									className="outline-accent rounded-md bg-gray-100 px-4 py-3"
									data-testid="email"
									id="email"
									placeholder="Email"
									type="email"
								/>
							</div>
							<div className="grid w-full">
								<label htmlFor="password">Password</label>
								<input
									className="outline-accent w-full rounded-md bg-gray-100 px-4 py-3"
									data-testid="password"
									id="password"
									placeholder="Password"
									type="password"
								/>
							</div>
							<button
								className="bg-primary hover:bg-accent text-accent w-full rounded-md p-2 px-4 py-3 text-center font-semibold text-white"
								type="button"
							>
								Register
							</button>{' '}
						</form>

						<p className="md:text-sm">
							Already have an account?{' '}
							<Link className="text-accent font-medium hover:underline" to="/log-in">
								Log in
							</Link>
						</p>
					</section>
				</main>
			</Page>
		</>
	);
}
