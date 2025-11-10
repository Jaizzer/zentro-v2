import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

import InitialStyle from './InitialStyle.tsx';
import ResetterStyle from './ResetterStyle.tsx';
import routes from './routes.tsx';
import VariableStyle from './VariableStyle.tsx';

const router = createBrowserRouter(routes);

createRoot(getRoot('root')).render(
	<StrictMode>
		<ResetterStyle />
		<VariableStyle />
		<InitialStyle />
		<RouterProvider router={router} />
	</StrictMode>
);

function getRoot(elementTag: string): HTMLElement {
	const root = document.getElementById(elementTag);

	if (!root) {
		throw new Error(`Root does not exist.'.`);
	}

	return root;
}
