import type { JSX } from 'react';

export interface InputProps {
	id: string;
	name: string;
	placeholder: string;
	type: string;
}

export default function Input({ id, name, placeholder, type }: InputProps): JSX.Element {
	return <input data-testid={name} id={id} placeholder={placeholder} type={type} />;
}
