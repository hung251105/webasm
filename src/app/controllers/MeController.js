const Toy = require('../models/Toy');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
  // [GET] /me/stored/toys
  storedToys(req, res, next) {
    Toy.find({})
      .then(toys => res.render('me/stored-toys', {
        toys: mutipleMongooseToObject(toys)
      }))
      .catch(next);
  }
}


module.exports = new MeController();