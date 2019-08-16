
import l from '../../common/logger';

class MathProblemService {


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
    add (min, max) {
        l.info(`${this.constructor.name}.add(${min}, ${max})`);
        var obj = {
            firstNumber: this.getRandomInt(min, max),
            secondNumber: this.getRandomInt(min, max),
            answer: null,
            operator: '+'
          }
          obj.answer = obj.firstNumber + obj.secondNumber;
          return obj;
    }

    sub (min, max) {
        l.info(`${this.constructor.name}.sub(${min}, ${max})`);
        var obj = {
            firstNumber: this.getRandomInt(min, max),
            secondNumber: this.getRandomInt(min, max),
            answer: null,
            operator: '-'
          }
          if (obj.firstNumber < obj.secondNumber) {
            //swap
            var temp = obj.firstNumber;
            obj.firstNumber = obj.secondNumber;
            obj.secondNumber = temp;
          }
    
          obj.answer = obj.firstNumber - obj.secondNumber;

          return obj;
    }

    mul (min, max) {
        l.info(`${this.constructor.mul}.sub(${min}, ${max})`);
        var obj = {
            firstNumber: this.getRandomInt(min, max),
            secondNumber: this.getRandomInt(min, max),
            answer: null,
            operator: '*'
          }
    
          obj.answer = obj.firstNumber * obj.secondNumber;

          return obj;
    }

    div (min, max) {
        l.info(`${this.constructor.name}.div(${min}, ${max})`);
        var obj = {
            firstNumber: null,
            secondNumber: this.getRandomInt(min, max),
            answer: this.getRandomInt(min, max),
            operator: '/'
          }
    
          obj.firstNumber = obj.answer * obj.secondNumber;

          return obj;
    }
}

export default new MathProblemService();
