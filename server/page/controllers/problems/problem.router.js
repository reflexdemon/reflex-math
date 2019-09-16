import * as express from 'express';
import ProblemController from './problem.controller';

export default express.Router().get('/', ProblemController.index);
