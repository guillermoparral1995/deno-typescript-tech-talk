import * as fs from 'fs';
import * as path from 'path';
import { Router, Request, Response, NextFunction } from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import View from './src/view';

const router = Router();

router.get('/:landingName', (req: Request, res: Response, next: NextFunction) => {
  const { landingName } = req.params;
  const view = renderToString(<View landingName={landingName}/>);

  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="app-root"></div>', `<div id="app-root">${view}</div>`)
    );
  });
});

export default router;