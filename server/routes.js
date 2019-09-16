import mathRouter from './api/controllers/math/math.router';
import problemRouter from './page/controllers/problems/problem.router';

export default function routes(app) {
  app.use('/api', mathRouter);
  app.use('/problem', problemRouter);
}
