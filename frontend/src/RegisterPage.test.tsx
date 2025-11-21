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
		const emailInputField: HTMLElement = screen.getByTestId('email');

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
		const passwordInputField: HTMLElement = screen.getByTestId('password');

		expect(passwordInputField).not.toBeNull();
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
});
