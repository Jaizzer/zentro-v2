import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import AuthenticationPage from './AuthenticationPage';
import LogInPage from './LogInPage';
import RegisterPage from './RegisterPage';

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
		const welcomeMessage: HTMLElement = screen.getByText('Welcome to Zentro!');
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
		const description: HTMLElement = screen.getByText(
			'Make your files secure and easy to access.'
		);
		expect(description).not.toBeNull();
	});

	it('renders the register button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
				</Routes>
			</MemoryRouter>
		);
		const registerButton: HTMLElement = screen.getByText('Register');
		expect(registerButton).not.toBeNull();
	});

	it('renders the log in button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
				</Routes>
			</MemoryRouter>
		);
		const logInButton: HTMLElement = screen.getByText('Log In');
		expect(logInButton).not.toBeNull();
	});

	it('redirects to the register page when the register button is clicked', async () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
					<Route element={<RegisterPage />} path="/register" />
				</Routes>
			</MemoryRouter>
		);

		// Initialize the user
		const user = userEvent.setup();

		// Simulate register button click
		const registerButton: HTMLElement = screen.getByText('Register');
		await user.click(registerButton);

		const registerPageDescription = await screen.findByText('Create an account');

		expect(registerPageDescription).not.toBeNull();
	});

	it('redirects to the log in page when the log in button is clicked', async () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/authentication']}>
				<Routes>
					<Route element={<AuthenticationPage />} path="/authentication" />
					<Route element={<LogInPage />} path="/log-in" />
				</Routes>
			</MemoryRouter>
		);

		// Initialize the user
		const user = userEvent.setup();

		// Simulate log in button click
		const logInButton: HTMLElement = screen.getByText('Log In');
		await user.click(logInButton);

		const logInPageDescription = screen.findByText('Access your files!');

		expect(logInPageDescription).not.toBeNull();
	});
});
