//import order module
Register = require('./Regmodel');
// Handle index actions

exports.index = function (req, res) {
Register.get(function (err, registers) {
if (err) {
res.json({
status: "error",
message: err,
});
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: registers
});
});
};
exports.new = function (req, res) { 
var register = new Register();
register.Category = req.body.Category;
register.FirstName = req.body.FirstName;
register.LastName = req.body.LastName;
register.Address = req.body.Address;
register.PIN = req.body.PIN;
register.Contact = req.body.Contact ;
register.Email = req.body.Email ;
register.UserName = req.body.UserName;
register.Password = req.body.Password;


// save the order and check for errors
register.save(function (err) {
// if (err)
// res.json(err);
res.json({
message: 'New order created!',
data: register
});
});
};
