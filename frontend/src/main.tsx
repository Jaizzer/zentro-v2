import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';

createRoot(getRoot('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);

function getRoot(elementTag: string): HTMLElement {
	const root = document.getElementById(elementTag);

	if (!root) {
		throw new Error(`Root does not exist.'].`);
	}

	return root;
}
