import type { JSX } from 'react';

import { Link } from 'react-router';

import authenticationpageImage from './assets/authentication-page-image-1.png';
import Page from './Page';

export default function AuthenticationPage(): JSX.Element {
	return (
		<Page>
			<div
				className="h-full pt-15 md:pt-0 grid md:gap-10 md:grid-cols-2 md:grid-rows-1 content-start 
                           justify-items-center md:justify-items-start items-start md:items-center rounded-lg overflow-hidden"
			>
				<div className="h-full w-full grid justify-items-center items-center md:bg-background">
					<img className="w-full max-w-96 sm:max-w-full" src={authenticationpageImage} />
				</div>
				<section className="bg-white grid gap-2">
					<h1 className="text-3xl text-black font-bold">Welcome to Zentro!</h1>
					<p>Zentro is an easy to use cloud storage.</p>
					<span className="w-80 grid grid-cols-2 gap-2">
						<Link
							className="p-2 rounded-md bg-primary hover:bg-accent text-white text-center font-semibold"
							to="/log-in"
						>
							Log In
						</Link>
						<Link
							className="w-full p-2 rounded-md bg-background hover:bg-accent hover:text-white text-accent text-center font-semibold"
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
