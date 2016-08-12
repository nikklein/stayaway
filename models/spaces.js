var thinky = require('thinky')();
var r = thinky.r;
var type = thinky.type;

var Space = thinky.createModel("spaces", {
  name: String,
  description: String,
  price: Number,
  userId: String,
  availibleFrom: Date,
  availibleTo: Date
});

Space.create = function(req, res) {
  Space.save({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    userId: req.body.userId,
    availibleFrom: req.body.availibleFrom,
    availibleTo: req.body.availibleTo
    });
};

module.exports = Space;

var User = require('./users');
Space.belongsTo(User, 'user', 'userId', 'id');
