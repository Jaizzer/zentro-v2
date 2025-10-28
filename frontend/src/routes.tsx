import type { JSX } from 'react';

import App from './App';
import AuthenticationPage from './AuthenticationPage';
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
		element: <AuthenticationPage />,
		path: '/authentication',
	},
	{
		element: <SignUpPage />,
		path: '/sign-up',
	},
];

export default routes;
