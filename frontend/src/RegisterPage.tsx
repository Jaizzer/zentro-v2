import type { JSX } from 'react';

import { Link } from 'react-router';

import FacebookIcon from './assets/icons/FacebookIcon';
import GithubIcon from './assets/icons/GithubIcon';
import GoogleIcon from './assets/icons/GoogleIcon';
import registerPageImage from './assets/register-page-image-1.png';
import Form from './Form';
import Input from './Input';
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
						<p>Create an account 👋</p>
						<Form submitButtonText="Register">
							<Input id="email" name="Email" placeholder="Email" type="email" />
							<Input
								id="password"
								name="Password"
								placeholder="Password"
								type="password"
							/>
							<Input
								id="confirm-password"
								name="Confirm Password"
								placeholder="Confirm Password"
								type="password"
							/>
						</Form>

						<p className="md:text-sm">
							Already have an account?{' '}
							<Link
								className="text-accent outline-accent font-medium hover:underline"
								to="/log-in"
							>
								Log in
							</Link>
						</p>

						<div className="mt-8 grid justify-items-center gap-2 md:justify-items-start">
							<p className="text-accent text-sm">Or continue with</p>
							<span className="flow-col grid auto-cols-[45px] grid-flow-col grid-rows-[45px] gap-2">
								<button
									aria-label="google"
									className="outline-accent grid items-center justify-items-center overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-300"
								>
									<GoogleIcon />
								</button>
								<button
									aria-label="facebook"
									className="outline-accent grid items-center justify-items-center overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-300"
								>
									<FacebookIcon />
								</button>

								<button
									aria-label="github"
									className="outline-accent grid items-center justify-items-center overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-300"
								>
									<GithubIcon />
								</button>
							</span>
						</div>
					</section>
				</main>
			</Page>
		</>
	);
}
