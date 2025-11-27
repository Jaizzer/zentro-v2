import { type JSX, useState } from 'react';

export interface InputProps {
	id: string;
	isVisibilityToggleButtonEnabled?: boolean;
	name: string;
	placeholder: string;
	type: string;
}

export default function Input({
	id,
	isVisibilityToggleButtonEnabled,
	name,
	placeholder,
	type,
}: InputProps): JSX.Element {
	const [isInputValueVisible, setIsInputValueVisible] = useState(
		!isVisibilityToggleButtonEnabled
	);

	const [inputValue, setInputValue] = useState('');

	let inputValueVisibilityButton: JSX.Element = (
		<button
			data-testid={'hide-input-value-button'}
			onClick={() => {
				setIsInputValueVisible(!isInputValueVisible);
			}}
			type="button"
		>
			Hide
		</button>
	);

	if (!isInputValueVisible) {
		inputValueVisibilityButton = (
			<button
				data-testid={'show-input-value-button'}
				onClick={() => {
					setIsInputValueVisible(!isInputValueVisible);
				}}
				type="button"
			>
				Show
			</button>
		);
	}

	console.log(inputValue);

	return (
		<div className="grid w-full">
			<label htmlFor={id}>{name}</label>
			<input
				className="outline-accent rounded-md bg-gray-100 px-4 py-3"
				data-testid={name}
				id={id}
				onChange={(event) => {
					setInputValue(event.target.value);
				}}
				placeholder={placeholder}
				type={isInputValueVisible ? type : 'password'}
				value={inputValue}
			/>
			{isVisibilityToggleButtonEnabled && inputValueVisibilityButton}
		</div>
	);
}
