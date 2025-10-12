import { Request, Response } from 'express';
function getIndex(req: Request, res: Response) {
	return res.send('<h1>Test Deployment</h1>');
}

export default {
	getIndex,
};
