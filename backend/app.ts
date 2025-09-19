// Setup the server
import express from 'express';

// Import dependencies for working with files and directory paths
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file directory path
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

// Load the environment variables
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirName, '../.env') });

// Load the port
const PORT = process.env.PORT || 8080;

// Initialize the application
const app = express();
app.listen(PORT, (error) => {
	if (error) {
		console.error(`Failed to start server: ${error}`);
	} else {
		const baseUrl = process.env.NODE_ENVIRONMENT === 'PRODUCTION' ? process.env.PRODUCTION_URL : `http://localhost:${PORT}`;
		console.log(`Server is listening on: ${baseUrl}`);
	}
});
