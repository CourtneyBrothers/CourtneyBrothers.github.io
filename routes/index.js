'use strict';

const { Router } = require('express');
const router = Router();


router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about',(req,res,next) => {
  res.render('about');
})

router.get('/portfolio',(req,res,next) => {
  res.render('projects');
})
// pipe all other requests through the route modules


// router.use(require('./foo'));

module.exports = router;