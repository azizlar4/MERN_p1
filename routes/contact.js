//1
const express = require("express");

//2
const router = express.Router();
const Contact = require("../models/Contact");
//test
router.get("/test", (req, res) => {
  res.send("jawek behi broski");
});
//add one
router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(200).send({ msg: "contact added", newContact });
  } catch (error) {
    res.status(400).send({ msg: "can not added this contact !!", error });
  }
});

//get all

router.get("/all", async (req, res) => {
  try {
    const listContacts = await Contact.find();
    res.status(200).send({ msg: "this is the list", listContacts });
  } catch (error) {
    res.status(400).send({ msg: "cannot get contact list", error });
  }
});

//get one
router.get("/one/:_id", async (req, res) => {
  try {
    const contactToGet = await Contact.findOne({ _id: req.params._id });
    res.status(200).send({ msg: "this is the contact", contactToGet });
  } catch (error) {
    res.status(400).send({ msg: "cannot get contact ", error });
  }
});

//delete one
router.delete("/delete/:_id", async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params._id });
    res
      .status(200)
      .send({ msg: `contact with id ${req.params._id} is deleted` });
  } catch (error) {
    res.status(400).send({ msg: "cannot delete contact ", error });
  }
});

//edit
router.put("/edit/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const contact = await Contact.updateOne({ _id }, { $set: { ...req.body } });
    res
      .status(200)
      .send({ msg: `contact with id ${req.params._id} is updated` });
  } catch (error) {
    res.status(400).send({ msg: "cannot update contact ", error });
  }
});

//3 export

module.exports = router;
