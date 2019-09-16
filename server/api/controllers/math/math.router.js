import * as express from 'express';
import MathController from './math.controller';

export default express
  .Router()
  .get('/add', MathController.add)
  .get('/sub', MathController.sub)
  .get('/mul', MathController.mul)
  .get('/div', MathController.div)
  .get('/addsub', MathController.addsub);
