// TODO: uncomment this line once your User model is ready
 const User = require("../models/user");

// The service layer handles all interaction with the database.
// Each function receives the data it needs and returns a result.
// Controllers call these functions and decide what HTTP response to send.

// ----------------------------------------------------------
// Return all users as an array.
// ----------------------------------------------------------
async function findAll() {
  // This is hardcoded example data so the frontend works straight away.
  // TODO: replace with User.find()
  const users = await User.find();
  return users;



  // return [
  //   {
  //     _id: "6aef672b31677b579035f3ea",
  //     name: "Alice",
  //     email: "alice@example.com",
  //     address: { city: "Paris", country: "France" },
  //     skills: [],
  //     avatar: "https://images.pexels.com/photos/17191688/pexels-photo-17191688.jpeg",
  //   },
  //   {
  //     _id: "6aef672b31677b579035f3eb",
  //     name: "Bob",
  //     email: "bob@example.com",
  //     skills: ["JavaScript", "MongoDB", "Node.js"],
  //   },
  // ];
}

// ----------------------------------------------------------
// Return a single user by their id.
// Returns null if no user is found.
// ----------------------------------------------------------
async function findById(id) {
  // TODO: return User.findById(id)
  const user = await User.findById(id);
  return user;
  
}

// ----------------------------------------------------------
// Insert a new user from body.
// Returns the created document.
// ----------------------------------------------------------
async function create(body) {
  // TODO: return User.create(body)
  const user = await User.create(body);
  return user;
}

// ----------------------------------------------------------
// Update a user by id with the fields in body.
// Returns the updated document, or null if not found.
// ----------------------------------------------------------
async function update(id, body) {
  // TODO: return User.findByIdAndUpdate(id, body, { new: true })
  const user = await User.findByIdAndUpdate(id, body, {new:true});
  return user;
}

// ----------------------------------------------------------
// Delete a user by id.
// Returns the deleted document, or null if not found.
// ----------------------------------------------------------
async function remove(id) {
  // TODO: return User.findByIdAndDelete(id)
  const user = await User.findByIdAndDelete(id);
  return user;
}

module.exports = { findAll, findById, create, update, remove };
