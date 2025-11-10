import { Link } from 'react-router';
import styled, { css } from 'styled-components';

const NavLink = styled(Link)<{ $button?: boolean }>`
	color: black;
	text-decoration: none;
	font-family: 'Arial';

	${(props) =>
		props.$button &&
		css`
			padding: 0.75rem;
			border-radius: 0.5rem;
			background-color: var(--primary);
			color: white;
		`};
`;

export default NavLink;
