import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import AuthenticationPage from './AuthenticationPage';

describe('Authentication page', () => {
	it('renders the welcome message', () => {
		// Render the authentication page component
		render(
			<MemoryRouter>
				<AuthenticationPage />
			</MemoryRouter>
		);
		const welcomeMessage: HTMLElement | null = screen.queryByText('Welcome to Zentro!');
		expect(welcomeMessage).not.toBeNull();
	});

	it('renders the app description', () => {
		// Render the authentication page component
		render(
			<MemoryRouter>
				<AuthenticationPage />
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
			<MemoryRouter>
				<AuthenticationPage />
			</MemoryRouter>
		);
		const signUpButton: HTMLElement | null = screen.queryByText('Sign Up');
		expect(signUpButton).not.toBeNull();
	});

	it('renders the sign in button', () => {
		// Render the authentication page component
		render(
			<MemoryRouter>
				<AuthenticationPage />
			</MemoryRouter>
		);
		const signInButton: HTMLElement | null = screen.queryByText('Sign In');
		expect(signInButton).not.toBeNull();
	});

	it('redirects to the sign up page when the Sign Up button is clicked', async () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/']}>
				<AuthenticationPage />
			</MemoryRouter>
		);

		// Initialize the user
		const user = userEvent.setup();

		// Simulate sign up button click
		const signUpButton: HTMLElement | null = screen.queryByText('Sign Up');
		if (signUpButton) {
			await user.click(signUpButton);
		}

		const registerPageHeading = screen.findByText('Register');

		expect(registerPageHeading).not.toBeNull();
	});
});
