import MathService from '../../services/math.service';

export class Controller {
  add(req, res) {
    MathService.add(
            req.query.min,
            req.query.max,
            req.query.size)
      .then(r => res.json(r));
  }
  sub(req, res) {
    MathService.sub(
            req.query.min,
            req.query.max,
            req.query.size)
      .then(r => res.json(r));
  }
  mul(req, res) {
    MathService.mul(
            req.query.min,
            req.query.max,
            req.query.size)
      .then(r => res.json(r));
  }
  div(req, res) {
    MathService.div(
            req.query.min,
            req.query.max,
            req.query.size)
      .then(r => res.json(r));
  }
  addsub(req, res) {
    MathService.addsub(
            req.query.min,
            req.query.max,
            req.query.size)
      .then(r => res.json(r));
  }
  
}
export default new Controller();
