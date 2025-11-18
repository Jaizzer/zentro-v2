import type { JSX } from 'react';

import { Link } from 'react-router';

import authenticationpageImage from './assets/authentication-page-image-1.png';
import Page from './Page';

export default function AuthenticationPage(): JSX.Element {
	return (
		<Page>
			<div className="grid h-full content-start items-start justify-items-center overflow-hidden rounded-lg pt-15 md:grid-cols-2 md:grid-rows-1 md:items-center md:justify-items-start md:gap-10 md:pt-0">
				<div className="md:bg-background grid h-full w-full items-center justify-items-center">
					<img className="w-full max-w-96 sm:max-w-full" src={authenticationpageImage} />
				</div>
				<section className="grid gap-2 bg-white">
					<h1 className="text-3xl font-bold text-black">Welcome to Zentro!</h1>
					<p>Make your files secure and easy to access.</p>
					<span className="grid w-80 grid-cols-2 gap-2">
						<Link
							className="bg-primary hover:bg-accent rounded-md p-2 text-center font-semibold text-white"
							to="/log-in"
						>
							Log In
						</Link>
						<Link
							className="bg-background hover:bg-accent text-accent w-full rounded-md p-2 text-center font-semibold hover:text-white"
							to="/register"
						>
							Register
						</Link>
					</span>
				</section>
			</div>
		</Page>
	);
}
