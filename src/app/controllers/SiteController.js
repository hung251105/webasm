const Toy = require('../models/Toy');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

  // [GET] /
  index(req, res, next) {
    Toy.find({})
      .then(toys => {
        res.render('home', {
          toys: mutipleMongooseToObject(toys),
        });
      })
      .catch(next);
    // res.render('home');
  }

  // [GET] /about
  about(req, res) {
    res.render('about');
  }
}


module.exports = new SiteController();