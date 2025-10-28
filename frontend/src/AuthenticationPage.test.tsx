import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import AuthenticationPage from './AuthenticationPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

describe('Authentication page', () => {
	it('renders the welcome message', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
				</Routes>
			</MemoryRouter>
		);
		const welcomeMessage: HTMLElement | null = screen.queryByText('Welcome to Zentro!');
		expect(welcomeMessage).not.toBeNull();
	});

	it('renders the app description', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
				</Routes>
			</MemoryRouter>
		);
		const description: HTMLElement | null = screen.queryByText(
			'Zentro is an easy to use cloud storage.'
		);
		expect(description).not.toBeNull();
	});

	it('renders the sign up button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
				</Routes>
			</MemoryRouter>
		);
		const signUpButton: HTMLElement | null = screen.queryByText('Sign Up');
		expect(signUpButton).not.toBeNull();
	});

	it('renders the sign in button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
				</Routes>
			</MemoryRouter>
		);
		const signInButton: HTMLElement | null = screen.queryByText('Sign In');
		expect(signInButton).not.toBeNull();
	});

	it('redirects to the sign up page when the Sign Up button is clicked', async () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
					<Route element={<SignUpPage />} path="/sign-up" />
				</Routes>
			</MemoryRouter>
		);

		// Initialize the user
		const user = userEvent.setup();

		// Simulate sign up button click
		const signUpButton: HTMLElement | null = screen.queryByText('Sign Up');
		if (signUpButton) {
			await user.click(signUpButton);
		}

		const signUpPageDescription = await screen.findByText('Create an account');

		expect(signUpPageDescription).not.toBeNull();
	});

	it('redirects to the sign in page when the Sign In button is clicked', async () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
					<Route element={<SignInPage />} path="/sign-in" />
				</Routes>
			</MemoryRouter>
		);

		// Initialize the user
		const user = userEvent.setup();

		// Simulate sign in button click
		const signInButton: HTMLElement | null = screen.queryByText('Sign In');
		if (signInButton) {
			await user.click(signInButton);
		}

		const signInPageDescription = screen.findByText('Access your files!');

		expect(signInPageDescription).not.toBeNull();
	});
});
