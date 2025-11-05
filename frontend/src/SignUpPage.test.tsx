import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import SignUpPage from './SignUpPage';

describe('Sign Up page', () => {
	it('renders the name input field', () => {
		// Render the authentication page component
		render(
			<MemoryRouter initialEntries={['/sign-up']}>
				<Routes>
					<Route element={<SignUpPage />} path="/sign-up" />
				</Routes>
			</MemoryRouter>
		);
		const nameInputField: HTMLElement | null = screen.queryByTestId('name');

		console.log(nameInputField);
		expect(nameInputField).not.toBeNull();
	});
});
