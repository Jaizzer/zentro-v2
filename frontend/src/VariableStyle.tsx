import { createGlobalStyle } from 'styled-components';

const VariableStyle = createGlobalStyle`
/* Theme */
@media (prefers-color-scheme: light) {
	:root {
		--text: #111023;
		--background: #e0e0f1;
		--primary: #948fe2;
		--secondary: #cfcee9;
		--accent: #5c57b2;
	}
}

@media (prefers-color-scheme: dark) {
	:root {
		--text: #dddcef;
		--background: #0e0e20;
		--primary: #231d72;
		--secondary: #171631;
		--accent: #524da8;
	}
}
/* End of Theme */

/* Border Radius */
:root {
	--radius-none: 0px;
	--radius-sm: 5px;
	--radius-md: 10px;
	--radius-lg: 15px;
	--radius-full: 999px;
}
/* End of Border Radius */
`;

export default VariableStyle;
