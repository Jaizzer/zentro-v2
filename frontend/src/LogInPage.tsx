import type { JSX } from 'react';

import logInPage from './assets/log-in-page-image-1.png';
import Input from './Input';
import Page from './Page';

export default function LogInPage(): JSX.Element {
	return (
		<>
			<Page>
				<main className="grid h-full content-start items-start justify-items-center overflow-hidden rounded-lg pt-15 md:grid-cols-2 md:grid-rows-1 md:items-center md:justify-items-start md:gap-10 md:pt-0">
					<div className="md:bg-background grid h-full w-full items-center justify-items-center">
						<img className="max-w-70 md:max-w-full" src={logInPage} />
					</div>
					<section className="grid w-full justify-items-center bg-white md:justify-items-start">
						<h1 className="text-left text-3xl font-bold">Log In</h1>
						<p>Access your files!</p>
						<form className="mt-1 grid w-full max-w-100 grid-cols-1 justify-items-center gap-4 px-5 py-5 sm:px-0 md:justify-items-start">
							<Input
								id="email-or-username"
								name="Email or Username"
								placeholder="Email or Username"
								type="text"
							/>
							<Input
								id="password"
								name="Password"
								placeholder="Password"
								type="password"
							/>
						</form>
					</section>
				</main>
			</Page>
		</>
	);
}
