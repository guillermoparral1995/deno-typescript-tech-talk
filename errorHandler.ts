import { Request, Response, NextFunction } from 'express';

export default (err: any, _req: Request, _res: Response, _next: NextFunction) => {
  const status = err.status || err.code;
  const message = err.message;
  console.error(`There was an error :: Status: ${status}, Message: ${message}, Stack: ${err.stack || 'none'}`);
}