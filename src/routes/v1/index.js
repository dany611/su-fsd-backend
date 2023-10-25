const express = require('express');
const fileRoute = require("./files.route")

const router = express.Router();

const defaultRoutes = [


  {
    path: '/files',
    route: fileRoute,
  },

];



defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
