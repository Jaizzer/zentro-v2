import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Form from './Form';
import Input from './Input';

describe('Form', () => {
	it('renders an input element', () => {
		// Render the Form component
		render(<Form />);

		// Find the form by checking if there's a submit button
		const formSubmitButton: HTMLElement = screen.getByTestId('submit-button');

		expect(formSubmitButton).not.toBeNull();
	});

	it('uses the provided submit button text', () => {
		// Render the Form component
		render(<Form submitButtonText="Submit Form" />);

		// Find the form submit button
		const formSubmitButtonText: string = screen.getByTestId('submit-button').textContent;

		// Check if the form submit button matches the provided text
		expect(formSubmitButtonText).toEqual('Submit Form');
	});

	it('calls the onSubmit function', async () => {
		// Initialize the user
		const user = userEvent.setup();

		// Create callback function
		const callback = vi.fn();

		// Render the Form component
		render(<Form handleSubmit={callback} submitButtonText="Submit Form" />);

		// Submit the form
		const formSubmitButton: HTMLElement = screen.getByTestId('submit-button');
		await user.click(formSubmitButton);

		// Check if the callback has been called
		expect(callback).toHaveBeenCalled();
	});

	it('renders the children input elements', () => {
		// Render the Form component
		render(
			<Form>
				<Input id="email" name="Email" placeholder="Email" type="email" />
			</Form>
		);

		// Check if the child input has been rendered
		const input: HTMLElement = screen.getByLabelText('Email');
		expect(input).not.toBeNull();
	});
});
