import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import LogInPage from './LogInPage';
import RegisterPage from './RegisterPage';

describe('Register page', () => {
	it('renders the email input field', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);
		const emailInputField: HTMLElement = screen.getByTestId('Email');

		expect(emailInputField).not.toBeNull();
	});

	it('renders the password input field', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);
		const passwordInputField: HTMLElement = screen.getByTestId('Password');

		expect(passwordInputField).not.toBeNull();
	});

	it('renders the confirm password input field', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);
		const confirmPasswordInputField: HTMLElement = screen.getByTestId('Confirm Password');

		expect(confirmPasswordInputField).not.toBeNull();
	});

	it('renders the link to the Log In page', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);

		const logInPageLink: HTMLElement = screen.getByRole('link', { name: /Log In/i });

		expect(logInPageLink).not.toBeNull();
	});

	it('redirects to the log in page when the log in button is clicked', async () => {
		// Render the register page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
					<Route element={<LogInPage />} path="/log-in" />
				</Routes>
			</MemoryRouter>
		);

		// Initialize the user
		const user = userEvent.setup();

		// Simulate log in button click
		const logInButton: HTMLElement = screen.getByRole('link', { name: /Log In/i });
		await user.click(logInButton);

		// Check if redirected to the log in page
		const logInPageDescription = screen.findByText('Access your files!');
		expect(logInPageDescription).not.toBeNull();
	});

	it('renders the register button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);

		const registerButton: HTMLElement = screen.getByRole('button', { name: /register/i });

		expect(registerButton).not.toBeNull();
	});

	it('renders the Google login button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);

		const googleButton: HTMLElement = screen.getByRole('button', { name: /google/i });

		expect(googleButton).not.toBeNull();
	});

	it('renders the Facebook login button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);

		const facebookButton: HTMLElement = screen.getByRole('button', { name: /facebook/i });

		expect(facebookButton).not.toBeNull();
	});

	it('renders the Github login button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/register']}>
				<Routes>
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);

		const githubButton: HTMLElement = screen.getByRole('button', { name: /github/i });

		expect(githubButton).not.toBeNull();
	});
});
