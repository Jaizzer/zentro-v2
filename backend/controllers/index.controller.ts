import { Request, Response } from 'express';
function getIndex(req: Request, res: Response) {
	res.status(200);
}

export default {
	getIndex,
};
