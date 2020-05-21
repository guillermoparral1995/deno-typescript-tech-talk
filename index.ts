import * as express from 'express';
import * as cors from 'cors';
import apiRouter from './api';
import appRouter from './app';
import errorHandler from './errorHandler';
const app = express();
app.use(cors());

app.use(express.static('./dist'));

app.use('/api', apiRouter);
app.use('/app', appRouter);
app.use(errorHandler);

app.listen(8080, () => console.log('Server listening on port 8080'));