import { Request, Response } from 'express';
function getIndex(req: Request, res: Response) {
	return res.status(200).send();
}

export default {
	getIndex,
};
