import type { JSX } from 'react';

export interface InputProps {
	id: string;
	name: string;
	placeholder: string;
	type: string;
}

export default function Input({ id, name, placeholder, type }: InputProps): JSX.Element {
	return (
		<div className="grid w-full">
			<label htmlFor={id}>{name}</label>
			<input
				className="outline-accent rounded-md bg-gray-100 px-4 py-3"
				data-testid={name}
				id={id}
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
}
