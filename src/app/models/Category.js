const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  categoryID: { type: Number, required: true },
  categoryName: { type: String, required: true },
  categoryDescription: { type: String, required: true },
});

module.exports = mongoose.model('Category', Category);