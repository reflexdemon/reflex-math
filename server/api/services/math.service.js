import l from '../../common/logger';
import MathProblemService  from '../services/mathproblem.service';


class MathService {
  add(min, max, size) {
    l.info(`${this.constructor.name}.add(${min}, ${max}, ${size})`);
    var result = [];
    for (var index=0; index < size; index++) {
      var obj = MathProblemService.add(min, max);
      result.push(obj);
    }
    return Promise.resolve(result);
  }

  sub(min, max, size) {
    l.info(`${this.constructor.name}.sub(${min}, ${max}, ${size})`);
    var result = [];
    for (var index=0; index < size; index++) {
      var obj = MathProblemService.sub(min, max);
      result.push(obj);
    }
    return Promise.resolve(result);
  }

  mul(min, max, size) {
    l.info(`${this.constructor.name}.mul(${min}, ${max}, ${size})`);
    var result = [];
    for (var index=0; index < size; index++) {
      var obj = MathProblemService.mul(min, max);
      result.push(obj);
    }
    return Promise.resolve(result);
  }

  div(min, max, size) {
    l.info(`${this.constructor.name}.div(${min}, ${max}, ${size})`);
    var result = [];
    for (var index=0; index < size; index++) {
      var obj = MathProblemService.div(min, max);
      result.push(obj);
    }
    return Promise.resolve(result);
  }

  addsub(min, max, size) {
    l.info(`${this.constructor.name}.addsub(${min}, ${max}, ${size})`);
    var result = [];
    for (var index=0; index < size; index++) {
      var obj = null;
      if (MathProblemService.getRandomInt(0,1)) {
        obj = MathProblemService.add(min, max);
      } else {
        obj = MathProblemService.sub(min, max);
      }
      result.push(obj);
    }
    return Promise.resolve(result);
  }
  
}

export default new MathService();
