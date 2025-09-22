// Setup the server
import express from 'express';

// Import the env variable retriever function
import env from './env.js';

// Load the port
const PORT = env('PORT');

// Initialize the application
const app = express();
app.listen(PORT, (error) => {
	if (error) {
		console.error(`Failed to start server: ${error}`);
	} else {
		const baseUrl =
			process.env.NODE_ENVIRONMENT === 'PRODUCTION'
				? process.env.PRODUCTION_URL
				: `http://localhost:${PORT}`;

		console.log(process.env.PRODUCTION_URL);
		console.log(`Server is listening on: ${baseUrl}`);
	}
});
