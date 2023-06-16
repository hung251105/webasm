const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Toy = new Schema({
  toyID: { type: Number, required: true },
  categoryID: { type: Number, required: true },
  toyName: { type: String, required: true },
  toyPrice: { type: Number, required: true, precision: 10, scale: 2 },
  toyImage: { type: String, required: true },
  toyDescription: { type: String, required: true },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Toy', Toy);