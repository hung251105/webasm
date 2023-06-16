const Toy = require('../models/Toy');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

class ToyController {

  // [GET] /toys/:toyID
  show(req, res, next) {
    Toy.findOne({ toyID: req.params.toyID })
      .then(toy => {
        res.render('toys/show', { toy: mongooseToObject(toy) });
      })
      .catch(next);
  }

  // [GET] /toys/create
  create(req, res, next) {
    res.render('toys/create');
  }

  // [POST] /toys/store
  store(req, res, next) {
    const formData = req.body;
    const toy = new Toy({
      toyID: Date.now(),
      categoryID: formData.categoryID,
      toyName: formData.toyName,
      toyPrice: formData.toyPrice,
      toyImage: formData.toyImage,
      toyDescription: formData.toyDescription
    });
    toy.save()
      .then(() => res.redirect('/'))
      .catch(next);
  }

  // [GET] /toys/edit
  edit(req, res, next) {
    Toy.findOne({ toyID: req.params.toyID })
      .then(toy => {
        res.render('toys/edit', { toy: mongooseToObject(toy) });
      })
      .catch(next);
  }

  // [PUT] /toys/:toyID
  update(req, res, next) {
    Toy.updateOne({ toyID: req.params.toyID }, req.body)
      .then(() => res.redirect('/me/stored/toys'))
      .catch(next);
  }

  // [DELETE] /toys/:toyID
  destroy(req, res, next) {
    Toy.deleteOne({ toyID: req.params.toyID })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [GET] /toys/search
  search(req, res, next) {
    const q = req.query.q;

    Toy.find({ toyName: new RegExp(q, 'i') })
      .then(toys => {
        res.render('home', { toys: mutipleMongooseToObject(toys) });
      })
      .catch(next);
  }
}

module.exports = new ToyController();