import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Input, { type InputProps } from './Input';

const inputProps: InputProps = {
	id: 'id',
	name: 'input',
	placeholder: 'placeholde',
	type: 'email',
};

describe('Input', () => {
	it('renders an input element', () => {
		// Render the Input component with name 'input'
		render(<Input {...inputProps} />);

		// Find the input with the name 'input'
		const input: HTMLElement = screen.getByTestId(/input/i);

		expect(input).not.toBeNull();
	});
});
