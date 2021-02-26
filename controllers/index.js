const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const userpageRoutes = require('./userpage-routes.js');

router.use('/', homeRoutes);
router.use('/userpage', userpageRoutes);
router.use('/api', apiRoutes);

router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;