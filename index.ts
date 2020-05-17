import * as express from 'express';
import * as cors from 'cors';
import apiRouter from './api';
const app = express();
app.use(cors());

app.use('/api', apiRouter);

app.listen(8080, () => console.log('Server listening on port 8080'));