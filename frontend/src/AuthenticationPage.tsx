import type { JSX } from 'react';

import { Link } from 'react-router';

import authenticationpageImage from './assets/authentication-page-image-1.png';
import Page from './Page';

export default function AuthenticationPage(): JSX.Element {
	return (
		<Page>
			<section className="bg-white flex flex-col items-center gap-2">
				<img src={authenticationpageImage} />
				<h1 className="text-3xl text-primary font-bold">Welcome to Zentro!</h1>
				<p> Zentro is an easy to use cloud storage.</p>
				<span className="w-80 flex basis-0 flex-row gap-2">
					<Link
						className="flex-1 p-2 rounded-md bg-primary hover:bg-accent text-white text-center font-semibold"
						to="/sign-in"
					>
						Sign In
					</Link>
					<Link
						className="flex-1 w-full p-2 rounded-md bg-background hover:bg-accent hover:text-white text-accent text-center font-semibold"
						to="/sign-up"
					>
						Sign Up
					</Link>
				</span>
			</section>
		</Page>
	);
}
