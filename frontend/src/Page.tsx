import type { JSX, ReactNode } from 'react';

interface PageProps {
	children: ReactNode;
}

export default function App({ children }: PageProps): JSX.Element {
	return <div className="h-full w-full border-2 p-4">{children}</div>;
}
