import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import AuthenticationPage from './AuthenticationPage';

describe('Authentication page', () => {
	it('renders the welcome message', () => {
		render(<AuthenticationPage />);
		const welcomeMessage: HTMLElement | null = screen.queryByText('Welcome to Zentro!');
		expect(welcomeMessage).not.toBeNull();
	});

	it('renders the app description', () => {
		render(<AuthenticationPage />);
		const description: HTMLElement | null = screen.queryByText(
			'Zentro is an easy to use cloud storage.'
		);
		expect(description).not.toBeNull();
	});

	it('renders the sign up button', () => {
		render(<AuthenticationPage />);
		const signUpButton: HTMLElement | null = screen.queryByText('Sign Up');
		expect(signUpButton).not.toBeNull();
	});

	it('renders the sign in button', () => {
		render(<AuthenticationPage />);
		const signInButton: HTMLElement | null = screen.queryByText('Sign In');
		expect(signInButton).not.toBeNull();
	});
});
