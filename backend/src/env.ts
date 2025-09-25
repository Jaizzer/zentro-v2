import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file directory path
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

// Retrieve the env file
dotenv.config({ path: path.resolve(__dirName, '../../.env') });

export default function env(name: string): string {
	const value = process.env[name];

	if (!value) {
		throw new Error(`Missing: process.env['${name}'].`);
	}

	return value;
}
