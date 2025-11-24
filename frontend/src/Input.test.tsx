import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Input from './Input';

describe('Input', () => {
	it('renders an input element', () => {
		// Render the Input component with name 'input'
		render(<Input name={'input'} />);

		// Find the input with the name 'input'
		const input: HTMLElement = screen.getByTestId(/input/i);

		expect(input).not.toBeNull();
	});
});
