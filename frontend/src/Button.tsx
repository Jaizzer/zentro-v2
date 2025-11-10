import type { JSX } from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 0;
	border-width: 0;

	background-color: transparent;
	color: inherit;
	font: inherit;

	cursor: pointer;

	padding: 0.75rem;
	border-radius: 0.5rem;
	background-color: var(--primary);
	color: white;

	&:hover {
		background-color: var(--accent);
	}
`;

type onClickCallback = () => void;

export default function Button(onClick: onClickCallback, textContent: string): JSX.Element {
	return <StyledButton onClick={onClick}>{textContent}</StyledButton>;
}
