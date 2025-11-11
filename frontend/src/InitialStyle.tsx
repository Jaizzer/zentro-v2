import { createGlobalStyle } from 'styled-components';

const InitialStyle = createGlobalStyle`
/* Initial Stylings */
* {
	box-sizing: border-box;
}

html {
	height: 100dvh;
	font-size: 62.5%;
}

a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}

body {
	height: 100%;
}

textarea {
	resize: none;
	font: inherit;
	outline: none;
}

#root {
    width: 100%;
    height: 100%;

    background-color: var(--background);

	color: var(--text);
    font-family: "Montserrat", sans-serif;

	display: grid;
	justify-content: center;
	align-content: center;
}
/* End of Initial Stylings */
`;

export default InitialStyle;
