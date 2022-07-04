//1
const mongoose = require("mongoose");

//2 create schema

const schema = mongoose.Schema;
const contactSchema = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: Number,
});


//3 export
module.exports = Contact = mongoose.model("contact", contactSchema);
