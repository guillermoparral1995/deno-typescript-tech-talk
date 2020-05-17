import { Router, Request, Response, NextFunction } from 'express';
import APIService from "../services/APIService";
import { Config, Content } from "../models";

const router = Router();
router.get('/configs', async (req: Request, res: Response, next: NextFunction) => {
    const { url } = req.query;
    const config: Config = await APIService.getConfig(url.toString());
    res.status(200).json(config);
});

router.get('/contents/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const content: Content = await APIService.getContent(id.toString());
    res.status(200).json(content);
});

export default router;
