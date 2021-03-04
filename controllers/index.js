const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const userpageRoutes = require('./userpage-routes.js');
const codehelpRoutes = require('./codehelp-routes.js');
const newspageRoutes = require('./newspage-routes.js');

router.use('/', homeRoutes);
router.use('/userpage', userpageRoutes);
router.use('/api', apiRoutes);
router.use('/codehelp', codehelpRoutes);
router.use('/newspage', newspageRoutes);

router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;