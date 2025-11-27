import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import Input, { type InputProps } from './Input';

const inputProps: InputProps = {
	id: 'id',
	isVisibilityToggleButtonEnabled: false,
	name: 'input',
	placeholder: 'placeholder',
	type: 'email',
};

describe('Input', () => {
	it('renders an input element', () => {
		// Render the Input component with name 'input'
		render(<Input {...inputProps} />);

		// Find the input with the name 'input'
		const input: HTMLInputElement = screen.getByTestId('input');

		expect(input).not.toBeNull();
	});

	it('initially hides the input value when the visibility toggle button is enabled', () => {
		// Render the Input component
		render(<Input {...inputProps} isVisibilityToggleButtonEnabled={true} type="password" />);

		// Find the input with the name 'input'
		const input: HTMLInputElement = screen.getByTestId('input');

		expect(input.type).toEqual('password');
	});

	it('renders the show input value button when the visibility toggle button is enabled', () => {
		// Render the Input component
		render(<Input {...inputProps} isVisibilityToggleButtonEnabled={true} type="password" />);

		// Find the show input value button
		const showInputValueButton: HTMLElement = screen.getByTestId(/show-input-value-button/i);

		expect(showInputValueButton).toBeTruthy();
	});

	it('does not render the show input value button when the visibility toggle button is disabled ', () => {
		// Render the Input component
		render(<Input {...inputProps} isVisibilityToggleButtonEnabled={false} type="password" />);

		// Find the show input value button
		const showInputValueButton: HTMLElement | null =
			screen.queryByTestId(/show-input-value-button/i);

		expect(showInputValueButton).toBeNull();
	});

	it('shows the input value when the show input value button is clicked', async () => {
		// Render the Input component
		render(<Input {...inputProps} isVisibilityToggleButtonEnabled={true} type="password" />);

		// Find the input with
		const input: HTMLInputElement = screen.getByTestId('input');

		// Get the initial input type
		const initialInputType: string = input.type;

		// Create the user
		const user = userEvent.setup();

		// Find the show input value button
		const showInputValueButton: HTMLElement = screen.getByTestId(/show-input-value-button/i);

		// Show the input value
		await user.click(showInputValueButton);

		// Get the new input type
		const newInputType: string = input.type;

		expect(newInputType).toEqual(initialInputType);
	});

	it('hides the input value when the hide input value button is clicked', async () => {
		// Render the Input component
		render(<Input {...inputProps} isVisibilityToggleButtonEnabled={true} type="text" />);

		// Find the input with
		const input: HTMLInputElement = screen.getByTestId('input');

		// Create the user
		const user = userEvent.setup();

		// Show the input value first
		const showInputValueButton: HTMLElement = screen.getByTestId(/show-input-value-button/i);
		await user.click(showInputValueButton);

		// Find the hide input value button
		const hideInputValueButton: HTMLElement = screen.getByTestId(/hide-input-value-button/i);

		// Hide the input value
		await user.click(hideInputValueButton);

		// Get the new input type
		const newInputType: string = input.type;

		expect(newInputType).toEqual('password');
	});
});
