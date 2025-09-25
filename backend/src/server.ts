import app from './app.ts';
import env from './env.ts';

// Load the port
const PORT = env('PORT');

// Start the server
app.listen(PORT, (error) => {
	if (error) {
		console.error(`Failed to start server: ${error}`);
	} else {
		const baseUrl =
			env('NODE_ENVIRONMENT') === 'PRODUCTION'
				? env('PRODUCTION_URL')
				: `http://localhost:${PORT}`;

		console.log(`Server is listening on: ${baseUrl}`);
	}
});
