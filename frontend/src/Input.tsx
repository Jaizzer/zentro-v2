import type { JSX } from 'react';

interface InputProps {
	name: string;
}

export default function Input({ name }: InputProps): JSX.Element {
	return <input data-testid={name} />;
}
