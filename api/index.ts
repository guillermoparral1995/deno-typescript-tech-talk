import { Router, Request, Response, NextFunction } from 'express';
import APIService from "../services/APIService";
import { Config, Content } from "../models";

const router = Router();
router.get('/configs', async (req: Request, res: Response, next: NextFunction) => {
    const { url } = req.query;
    try {
        const config: Config = await APIService.getConfig(url.toString());
        res.status(200).json(config);
    } catch (err) {
        next(err);
    }
});

router.get('/contents/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const content: Content = await APIService.getContent(id.toString());
        res.status(200).json(content);
    } catch (err) {
        next(err);
    }
});

export default router;
