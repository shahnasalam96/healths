let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to healthdb!',
    });
});
var Regcontrol = require('./register/Regcontrol');
// order routes
router.route('/register')
.get(Regcontrol.index)
.post(Regcontrol.new);

module.exports = router;
