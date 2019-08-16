import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/add', controller.add)
  .get('/sub', controller.sub)
  .get('/mul', controller.mul)
  .get('/div', controller.div)
  .get('/addsub', controller.addsub)
  ;
