import type { JSX } from 'react';

import App from './App';
import AuthenticationPage from './AuthenticationPage';
import LogInPage from './LogInPage';
import RegisterPage from './RegisterPage';

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
		element: <RegisterPage />,
		path: '/register',
	},
	{
		element: <LogInPage />,
		path: '/log-in',
	},
];

export default routes;
