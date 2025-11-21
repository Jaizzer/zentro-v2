import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

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
