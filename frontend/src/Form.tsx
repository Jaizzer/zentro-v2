import type { JSX, ReactNode } from 'react';

export interface FormProps {
	children?: ReactNode;
	handleSubmit?: Function;
	submitButtonText?: string;
}

type Function = () => void;

export default function Form({ children, handleSubmit, submitButtonText }: FormProps): JSX.Element {
	return (
		<form
			className="grid w-full max-w-100 grid-cols-1 justify-items-center gap-4 px-5 py-5 sm:px-0 md:justify-items-start"
			onSubmit={handleSubmit}
		>
			{children}
			<button
				className="bg-primary hover:bg-accent text-accent outline-accent w-full rounded-md p-2 px-4 py-3 text-center font-semibold text-white"
				data-testid="submit-button"
				type="submit"
			>
				{submitButtonText ?? 'Submit'}
			</button>
		</form>
	);
}
