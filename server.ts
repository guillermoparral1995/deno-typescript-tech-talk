import { opine } from "https://deno.land/x/opine@master/mod.ts";
import {
  Request,
  Response,
  NextFunction,
} from "https://deno.land/x/opine@master/src/types.ts";
import View from './src/app.jsx';
import App from './src/components/App.jsx';

const app = opine();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!');
});

app.get('/home', (req: Request, res: Response, next: NextFunction) => {
  res.send(View);
});

app.get('/bundle.js', (req: Request, res: Response, next: NextFunction) => {
  const js = `import React from "https://dev.jspm.io/react";\nimport ReactDOM from "https://dev.jspm.io/react-dom";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.getElementById('app-root'));`
  res.type("application/javascript").send(js);
});

await app.listen({ port:8000 });

console.log('App listening in port 8000');
