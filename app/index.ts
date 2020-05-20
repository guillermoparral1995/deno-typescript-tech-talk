import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/:landingName', (req: Request, res: Response, next: NextFunction) => {
  const { landingName } = req.params;
  
});

export default router;