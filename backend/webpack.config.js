import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file directory path
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

export default {
	target: 'node',
	// Entry point
	entry: './src/server.ts',
	output: {
		// Name of the bundled output file
		filename: 'bundle.js',
		// Output directory
		path: path.resolve(__dirName, 'dist'),
		// Clean the output directory before each build
		clean: true,

		// Output ES module bundle
		library: { type: 'module' },
	},
	resolve: {
		// Resolve these file extensions when importing
		extensions: ['.ts', '.js'],
	},
	stats: {
		errorDetails: true,
	},
	module: {
		rules: [
			{
				// Apply this rule to .ts and .tsx files
				test: /\.tsx?$/,
				// Use ts-loader to transpile TypeScript
				use: 'ts-loader',
				// Exclude dependencies
				exclude: /node_modules/,
			},
		],
	},
	experiments: {
		outputModule: true, // 🔹 enable ESM output
	},
};
