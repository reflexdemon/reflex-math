import mathRouter from './api/controllers/math/router';

export default function routes(app) {
  app.use('/api', mathRouter);
}
