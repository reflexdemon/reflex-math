export class ProblemController {
  index(req, res) {
    res.render('index', {
      title: 'Express',
    });
  }
}
export default new ProblemController();
