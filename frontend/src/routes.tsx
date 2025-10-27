import type { JSX } from 'react';

import App from './App';
import SignUpPage from './SignUpPage';

interface Route {
	element: JSX.Element;
	path: string;
}

const routes: Route[] = [
	{
		element: <App />,
		path: '/',
	},
	{
		element: <SignUpPage />,
		path: '/sign-up',
	},
];

export default routes;
